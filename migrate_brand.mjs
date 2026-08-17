import fs from 'fs';
import path from 'path';

const dirs = ['./src/converted-legacy/pages', './src/converted-legacy/components'];

const replacements = [
  { regex: /Neon Alloys/gi, replace: "Siyak Steel International" },
  { regex: /Neon alloy/gi, replace: "Siyak Steel International" },
  { regex: /NEONALLOYS/g, replace: "SIYAK STEEL" },
  { regex: /NEON ALLOYS/g, replace: "SIYAK STEEL INTERNATIONAL" },
  { regex: /NeonAlloys/g, replace: "SiyakSteel" },
  { regex: /neonalloys/g, replace: "siyaksteel" },
  { regex: /Ensuring Stainless Performance/gi, replace: "Engineering Quality. Delivering Trust" },
  { regex: /exports@neonalloys\.com/g, replace: "info@siyaksteel.com" },
  { regex: /nitin@neonalloys\.com/g, replace: "info@siyaksteel.com" },
  { regex: /chandresh@neonalloys\.com/g, replace: "info@siyaksteel.com" },
  { regex: /9833461810/g, replace: "9820976537" },
  { regex: /98334 61810/g, replace: "98209 76537" },
  { regex: /\+ 91 22 6659 5558/g, replace: "+ 91 22 6615 1478" },
  { regex: /\+ 91 22 6659 5559/g, replace: "+ 91 22 6659 5225" },
  { regex: /\+ 91 22 6659 5982/g, replace: "+ 91 98209 76537" },
  { regex: /807\/808, 8th Floor, Parekh Market/g, replace: "Plot No. 2, 7 Kikabhai Mansion, 3rd Floor" },
  { regex: /39 J\.S\.S\. Road, Opera House/g, replace: "Office No. 17, Kika Street, Girgaon" },
];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    if (f.endsWith('.jsx')) {
      const filePath = path.join(dir, f);
      let content = fs.readFileSync(filePath, 'utf8');
      
      replacements.forEach(r => {
        content = content.replace(r.regex, r.replace);
      });
      
      fs.writeFileSync(filePath, content);
    }
  });
});

console.log("Brand migration text replacement complete!");
