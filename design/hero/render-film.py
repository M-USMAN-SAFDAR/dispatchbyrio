import subprocess, imageio_ffmpeg
from pathlib import Path
ff=imageio_ffmpeg.get_ffmpeg_exe()
root=Path(__file__).resolve().parents[2]
source=Path(__file__).resolve().parent
out=root/'client/public/media'
out.mkdir(parents=True, exist_ok=True)
# Smooth image-based camera passes. 24fps, no audio, web-streamable H.264.
filters="[0:v]scale=2560:-1,zoompan=z='1.015+0.045*(1-cos(PI*on/215))/2':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=216:s=1600x900:fps=24,setsar=1[a];[1:v]scale=2560:-1,zoompan=z='1.06-0.045*(1-cos(PI*on/215))/2':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=216:s=1600x900:fps=24,setsar=1[b];[2:v]scale=2560:-1,zoompan=z=1.015:x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=24:s=1600x900:fps=24,setsar=1[c];[a][b]xfade=transition=fade:duration=1:offset=8[ab];[ab][c]xfade=transition=fade:duration=1:offset=16,format=yuv420p[v]"
subprocess.run([ff,'-y','-i',str(source/'rio-sunset-source.png'),'-i',str(source/'rio-yard-source.png'),'-i',str(source/'rio-sunset-source.png'),'-filter_complex',filters,'-map','[v]','-an','-c:v','libx264','-preset','fast','-crf','23','-movflags','+faststart',str(out/'rio-hero-film.mp4')],check=True)
subprocess.run([ff,'-y','-i',str(out/'rio-hero-film.mp4'),'-frames:v','1','-q:v','3',str(out/'rio-hero-poster.jpg')],check=True)
print('Video bytes:',(out/'rio-hero-film.mp4').stat().st_size)

