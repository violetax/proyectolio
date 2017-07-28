" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2011 Apr 15
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

if has("vms")
  set nobackup		" do not keep a backup file, use versions instead
else
"  set backup		" keep a backup file
endif
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
"  set mouse=a
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  augroup END

else

  set autoindent		" always set autoindenting on

endif " has("autocmd")

"Source closetags, if vim-close wasn't used...
"au Filetype html,xml,xsl source ~/.vim/autoload/closetag.vim 


"ME DA LA CHAPA TENER QUE CONFIRMAR EL CAMBIO  Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
"  command DiffOrig vert new | set bt=nofile | r ++edit # | 0d_ | diffthis
"		  \ | wincmd p | diffthis
endif


"MY ADDS
set exrc
set number

"Now any plugins you wish to install can be extracted to a subdirectory under
"~/.vim/bundle, and they will be added to the 'runtimepath'. Observe:
"
"cd ~/.vim/bundle && \
"git clone git://github.com/tpope/vim-sensible.git
"
"Now sensible.vim is installed. 
"
"If you don't like the directory name bundle, you can pass a runtime relative
"glob as an argument:
"
"execute pathogen#infect('stuff/{}')
"
"The {} indicates where the expansion should occur.
"
"You can also pass an absolute path instead. I keep the plugins I maintain
"under ~/src, and this is how I add them:
"
"execute pathogen#infect('bundle/{}', '~/src/vim/bundle/{}')

"ENTRY MY FILES

"scr files
" Set scripts to be executable from the shell: HMM, DOESN'T WORK INMEDIATELY

"c files

"SOBRE BACKUP FILES

"ABBREVIATIONS
ab rsc <div class="resources""></div><up>
ab nt <div class="nota"></div><Left><Left><Left><Left><Left><Left>
ab noti <div class="nota importante"></div><Left><Left><Left><Left><Left><Left>
ab napr <div class="nota cosasqueaprendi"></div><Left><Left><Left><Left><Left><Left>
ab ntvt <nota type=vim class=tip  /><Left><Left><Left>
ab nts <nota type=scr  /><Left><Left><Left> 



"MAPPINGS
map <F2> :3,$d
map fa :r!echo "<fecha $(date) $(echo \>)";echoo
map fc :r!echo "<fecha $(date) $(echo /\>)"
map go :r!echo "<empieza>";echoo
map fi :r!echo "<termina\\>";echoo
map snn :set nonumber
map sn :set number
map bb :e#
map zz :w

"PROMAPS
map sese :!grep \<section %
map sear :!grep \<article %
map ite :0r!cat ~/notashtml/notas.html
map tit :7s/XXXXXXXX//<Left>

map gta :r!grep -o "<[^ ]*" 
map pre :e ~/preguntas.log
"MY TAGS
ab prob <div class="problema"></div><Left><Left><Left><Left><Left><Left><Left><Left>
ab solv  <div class="solucion"></div><up>
ab tar <div class="tarea"></div><Left><Left><Left><Left><Left><Left>
ab pre <div class="pregunta"></div><Left><Left><Left><Left><Left><Left>
ab ref <div class="referencia"></div><Left><Left><Left><Left><Left><Left>
ab def <div class="definicion"></div><Left><Left><Left><Left><Left><Left>
ab pen <div class="pendiente"></div><Left><Left><Left><Left><Left><Left>
ab dic <div class="code"></div><up>
ab dig <div class="general"></div><up> 
ab digs <div class="subgeneral"></div><up>
ab dil <div class="divli"></div><up>
ab dis <div class="subarticle"></div><up>
ab dod <div class="codigo"></div><up>
ab dip <div class="prere" text-indent="-2em" padding-left="2em"></div><up>
"<Left><Left><Left><Left><Left><Left>
ab dral <div class="descgral"></div><Left><Left><Left><Left><Left><Left>
ab pas  <div class="paso"></div><Left><Left><Left><Left><Left><Left>

ab h1 <h1></h1> <left><left><left><left><left><left>
ab h2 <header><h2></h2></header><left><left><left><left><left><left><left><left><left><left><left><left><left><left>
ab h3 <h3></h3> <left><left><left><left><left><left>
ab h4 <h4></h4> <left><left><left><left><left><left>
ab h5 <h5></h5> <left><left><left><left><left><left>
ab h6 <h6></h6> <left><left><left><left><left><left>
ab sec <section class=""></section><left><left><left><left><left><left><left><left><left><left><left><left>
ab pp <p></p><left><left><left><left>
ab aa <article class=""></article><left><left><left><left><left><left><left><left><left><left><left><left>
ab ul <ul><li></li></ul><up><right><right><right>
"<left><left><left><left><left><left><left><left>
ab ol <ol><li></li></ol><up><right><right><right>
"<left><left><left><left><left><left> 
"<left><left><left><left>
ab li <li></li><left><left><left><left><left>
ab dl <dl><dt></dt></dl><up><right><right><right>
"<left><left><left><left><left><left><left><left><left><left>
ab dd <dd></dd><left><left><left><left><left>
"map noni :filetype indent on
"map nofi :filetype indent off
"comments OUT:
"html:
map yc :s/<\(.*\)>\(.*\)<\(.*\)>/<!-- ;\1;\2;\3; -->/
map yu :s/<!-- ;\(.*\);\(.*\);\(.*\); -->/<\1>\2<\3>/
map ycs :s/<\(.*\)>/<!-- ;\1; -->/
map yus :s/<!-- ;\(.*\); -->/<\1>/
map yn :s/<\(.*\)><\(.*\)><\(.*\)>/<!-- ;\1;;\2;;\3; -->/
map yun :s/<!-- ;\(.*\);;\(.*\);;\(.*\); -->/<\1><\2><\3>/
"reduce tab indent:
"map li :%s/^	/    /
"map di :s/^    //
"map mi :s/^/    / 
"save command in useful_commands after running fc
map cuc :w >> ~/useful_scripts/useful_commands
"comment out with #
map ## :s/^/#/
map ,, :%s/\n/,/
map ,d :s/,$//

"SNNIPETS


"FUNCTIONS
"capture output of ex command in a register

function! TabMessage(cmd)
  redir => message
  silent execute a:cmd
  redir END
  if empty(message)
    echoerr "no output"
  else
    " use "new" instead of "tabnew" below if you prefer split windows instead of tabs
    new
    setlocal buftype=nofile bufhidden=wipe noswapfile nobuflisted nomodified
    silent put=message
  endif
endfunction
command! -nargs=+ -complete=command TabMessage call TabMessage(<q-args>)

"TABS SIZE!!!!
"Depending on what you mean by tab, one of the following should work:
" size of a hard tabstop
set tabstop=4

"size of an "indent"
set shiftwidth=4

"MARKS
"set viminfo='100,f1
"WARNIG! con esto setado, no me overwrite las marks!

"https://www.linux.com/news/vim-tips-moving-around-using-marks-and-jumps
"If you have viminfo set, it will save local marks (a-z) by default. The '100 tells Vim to save marks and other information for up to 100 files. The f1 directive tells Vim to also save global marks (A-Z) when it exits. If you don't want Vim to do this, set it to f0 instead.

"SET TEXTWIDHT
"set textwidth=60

" a combination of spaces and tabs are used to simulate tab stops at a width
" other than the (hard)tabstop
" set softtabstop=4
"You may also want to try the following:
"
" make "tab" insert indents instead of tabs at the beginning of a line
" set smarttab

" always uses spaces instead of tab characters
" set expandtab
" See :help 'optionname' (eg: :help 'tabstop') for more details on any of
" these.
"
" In a codebase that uses 4 space characters for each indent, here are good
" settings to start with:
"
" set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab
"
" In a codebase that uses a single tab character that appears 4-spaces-wide
" for each indent these settings should work:
"
" set tabstop=4 softtabstop=0 noexpandtab shiftwidth=4

"JAVA ABS
"ab sop System.out.println(
"ab esp + " " + 
"ab nl + "\n\" + 


"Add the following to your vimrc file to add the "skip to next placeholder" functionality which will move the cursor to the next %%% section:

imap <buffer> ;; <C-O>/%%%<CR><C-O>c3l
nmap <buffer> ;; /%%%<CR>c3l
