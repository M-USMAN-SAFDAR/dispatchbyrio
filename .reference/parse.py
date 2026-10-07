import re
s=open('.reference/pack.html',encoding='utf-8').read()
for term in ['long-nose','dry-van','parking-lamp']:
 links=list(dict.fromkeys(re.findall(r'href="([^"]*'+term+r'[^"]*)"',s)))
 print(term,links[:5])
