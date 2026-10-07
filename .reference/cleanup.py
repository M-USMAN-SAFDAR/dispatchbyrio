from pathlib import Path
p=Path('client/src/index.css');lines=p.read_text(encoding='utf-8').splitlines()
prefixes=('.truck-canvas ','.truck-canvas canvas ','.scene-fallback ','.scene-loading ','.equipment-stage ','.equipment-stage .', '.equipment-overlay ','.equipment-overlay ','.equipment-overlay ','.equipment-overlay h3 ','.equipment-overlay p ','.equipment-overlay span', '.equipment-note ','.equipment-selector ','.equipment-selector button', '.equipment-footnote ')
p.write_text('\n'.join(line for line in lines if not line.strip().startswith(prefixes))+'\n',encoding='utf-8')
