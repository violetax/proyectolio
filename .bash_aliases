alias lnm='vim  ~/notashtml/lnm-tutorial.html'


alias n=node
alias ns='npm start'
alias nin='npm install --save-dev'
alias na='node app.js';
alias nap='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto/panelesBoroaBDD; node app.js 2>/dev/null'
alias nag='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto/geoJBDD; node app.js 2>/dev/null'
alias nig='node geomongo.js'
alias vap='vim /cygdrive/c/Users/vgonzalez/workspace/proyecto/panelesBoroaBDD/app.js'
alias vag='vim /cygdrive/c/Users/vgonzalez/workspace/proyecto/geoJBDD/app.js'
alias vig='vim /cygdrive/c/Users/vgonzalez/workspace/proyecto/geomongo_createDB.js'
alias vip='vim /cygdrive/c/Users/vgonzalez/workspace/proyecto/panelesboroaMongoJS.js'

alias lg='ls g*'

#CD PRO
alias pro='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto'
alias cgeo='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto/geoJBDD'
alias cpan='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto/panelesBoroaBDD'
alias mongi='cd /cygdrive/c/Users/vgonzalez/workspace/proyecto/dbmongofiles'
alias cno='cd ~/notashtml'
alias cwe='cd ~/notashtml/webservice'
alias cgi='cd /cygdrive/c/Users/vgonzalez/workspace/aRESTJSON'

#HTMLs
#archivo del día:
alias vca='vim ~/notashtml/webservice/callrest.html'
#html template:  ~/notas.html
alias hind='vim ~/notashtml/index_borrador.html'
#see dds of index:
	alias shind='grep "dd id=\"index" ~/notashtml/index_borrador.html'
#see titles of index-htmls:
	alias ind='grep "<title" index*html'
#see titles of htmls:
	alias tis='grep "<title" notas*html'
alias hjsp='vim ~/notashtml/notas_jsps.html'
alias htil='vim ~/notashtml/notas_tiles.html'
alias hctr='vim ~/notashtml/notas_controllers.html'
alias tar1='vim ~/notashtml/emergenciasEntel/tarea1.html'
alias tar2='vim ~/notashtml/emergenciasEntel/tarea2.html'
alias tar3='vim ~/notashtml/emergenciasEntel/tarea3.html'
alias tar4='vim ~/notashtml/webservice/tarea4.html'
alias tar5='vim ~/notashtml/webservice/tarea5.html'
alias tar6='vim ~/notashtml/webservice/tarea6.html'

#CHECK LAST PENDIENTE
#alias pend='sed -ne \'/=\"pendiente/,/<\/div>/p\' ~/bitacora.log | tail'


alias b=bash
alias ..='cd ..'
alias cb='cd -'
alias envf='vim ~/.bashrc'
alias vimrc='vim ~/.vimrc'
alias alis='vim ~/.bash_aliases'
alias bl='vim ~/bitacora.log'
alias pre='vim ~/preguntas.log'


#CONSULTS
alias sedef='sed -ne "/<div class=\"definicion\">/,/<\/div>/{p}'
alias sepre='grep "class=\"pregunta\"" *html *log '

#TREE
alias pree='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src && tree -d y* --prune -I "\.svn|\.settin|target|build|test*|classes"'


#SHORTCUTS
alias ux='chmod u+x'
#grep
#alias grepin='find . -type f | xargs grep -I | grep -v "\.svn\|\.settin\|target\|build\|test\|classes"'
#alias grepini='find . -type f | xargs grep -I -i | grep -v "\.svn\|\.settin\|target\|build\|test\|classes"'
alias grepts='grep -o "<[^ ]*"'
#useful
alias vawk="/home/vgonzalez/useful_scripts/vawk"
alias sawk="/home/vgonzalez/useful_scripts/sawk"
alias agri="/home/vgonzalez/useful_scripts/agri"
alias bufi="/home/vgonzalez/useful_scripts/bupfiles.scr"
alias grepin="/home/vgonzalez/useful_scripts/grepin"
alias grepini="/home/vgonzalez/useful_scripts/grepini"


#CDs
alias cc='cd /cygdrive/c'
alias use='cd /home/vgonzalez/useful_scripts'
alias cgc='cd /home/vgonzalez/gcursosvioleta'
alias pru='cd /home/vgonzalez/pruebas'


#CD EMERGENCIAS
#alias pro='cd /cygdrive/c/proyectos/ejie/2011EMER'
alias tru='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk'
alias src='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src'
alias pcon='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/config'
alias pcla='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aEARClasses'
alias pwar='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aEmergenciasWar/src/com/ejie/y32a'
alias pweb='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aEmergenciasWar/WebContent/WEB-INF'
alias pvie='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aEmergenciasWar/WebContent/WEB-INF/views'
alias pwam='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aEmergenciasWar/src/META-INF'
alias psta='cd /cygdrive/c/proyectos/ejie/2011EMER/trunk/src/y32aStatics'

#GREP
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias grepe='grep -E --color=auto'
alias grepoh='grep -oh --color=auto'
alias grepo='grep -o --color=auto'
alias grepv='grep -v --color=auto'
#-o      Print each match, but only the match, not the entire line.
#-h      Never print filename headers (i.e. filenames) with output lines.
#-w      The expression is searched for as a word (as if surrounded by
#         `[[:<:]]' and `[[:>:]]'; PERFORMANCE VARY GIVEN PLATFORM!

#SED
#sed SIN N para que output el resto
#sed CON N para que salgan s'olo los matches
alias sede='sed -e'
alias sedne='sed -ne'
alias sedi='sed -i'

#LS
alias l='ls -CF'
alias la='ls -AX'
alias lla='ls -AlX'
alias lgr='ls -lX | grep '
alias lga='ls -lAX |grep '
alias la1='ls -A1X'
alias ll='ls -alF'
alias ls='ls --color=auto'
#alias ld='ls --group-directories-first -1X'
alias ld1='ls --group-directories-first -1Xl'
alias lx='ls --group-directories-first -1X'
alias exrc='vim .exrc'
#VARIOUS COMMANDS
alias o=less
alias v=vim
alias a=alias
alias e=echo
alias wcl='wc -l'
alias ptre='tree -aL 1 --dirsfirst'
alias tred='tree -d'
alias tre7='tree --filelimit 7'
alias tref='tree --filelimit'
#no comprendo, pero esta mierda de del, desde hoy no va
alias del="rm '!ls:*'" 
alias del='fc -s ls=rm'
alias h='fc -l'
alias r='fc -s'
alias grepal='cat ~/.bash_aliases | grep'
alias grepi='cat ~/.bash_history | grep'
alias difscl="diff --suppress-common-lines"
alias fh='find . -maxdepth 1 -type d -iname "[^.]*"'
alias ff='find . -type f -iname'
alias fd='find . -type d -iname'
alias cutf='cut -f'
alias cute='cut -d " " -f'
alias sortu='sort | uniq'
alias ccmg="cd /cygdrive/c/Program\ Files/MongoDB/Server/3.4/bin/"
