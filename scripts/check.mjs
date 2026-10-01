import fs from 'node:fs';
import path from 'node:path';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const pages=walk('dist').filter(p=>p.endsWith('.html'));const titles=new Set();
for(const page of pages){const html=fs.readFileSync(page,'utf8');const title=html.match(/<title>(.*?)<\/title>/)[1];if(titles.has(title))throw Error('Duplicate title '+title);titles.add(title);if(!html.includes('Concept'))throw Error('Missing disclosure '+page);for(const [,url]of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)){const target=path.join('dist',url);if(!fs.existsSync(target))throw Error('Missing reference '+url+' in '+page);}if(!html.includes('id="main"'))throw Error('Missing main target');}
if(pages.length!==13)throw Error('Expected 13 pages');console.log('Verified 13 pages, unique titles, concept disclosures, internal links and asset references.');
