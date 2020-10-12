(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{146:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return a})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),s=r(7),i=(r(0),r(556)),o={id:"rsync",title:"Rsync"},a={unversionedId:"ops/storage/tool/rsync",id:"ops/storage/tool/rsync",isDocsHomePage:!1,title:"Rsync",description:"rsync",source:"@site/contents/tricks/ops/storage/tool/rsync.md",slug:"/ops/storage/tool/rsync",permalink:"/notes/ops/storage/tool/rsync",version:"current"},c=[{value:"Tips",id:"tips",children:[]},{value:"Concurrent",id:"concurrent",children:[]},{value:"--help",id:"--help",children:[]}],l={rightToc:c};function p(e){var n=e.components,r=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rsync"},"rsync"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.cheatography.com/richardjh/cheat-sheets/rsync/"}),"https://www.cheatography.com/richardjh/cheat-sheets/rsync/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/rsync"}),"https://wiki.archlinux.org/index.php/rsync")),Object(i.b)("li",{parentName:"ul"},"unison",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.cis.upenn.edu/~bcpierce/unison/"}),"https://www.cis.upenn.edu/~bcpierce/unison/")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--info=progress2")," \u663e\u793a\u901f\u5ea6")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# \u4f7f\u7528 SSH \u540c\u6b65\nrsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/ \n\n# \u8fdc\u7a0b\u4f7f\u7528 sudo\nrsync --rsync-path="sudo rsync" -avz dnsmasq/ admin@10.1.1.1:/etc/dnsmasq/\n\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u4e0d\u540c\u6b65\u6743\u9650\u7528\u6237\u5206\u7ec4\u4fe1\u606f\nrsync -avz --no-perms --no-owner --no-group mnt/wener abuild/\n\n# \u914d\u5408 fswatch \u4f7f\u7528\n# \u62f7\u8d1d\nfswatch ./ | xargs -I{} cp {} ~/Dropbox/backup/latest/\n# rsync\nalias run_rsync=\'rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~\'\nrun_rsync; fswatch -o . | while read f; do run_rsync; done\n')),Object(i.b)("h2",{id:"concurrent"},"Concurrent"),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync"}),"https://wiki.ncsa.illinois.edu/display/~wglick/2013/11/01/Parallel+Rsync")),Object(i.b)("h2",{id:"--help"},"--help"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ rsync --help\nrsync  version 3.1.1  protocol version 31\nCopyright (C) 1996-2014 by Andrew Tridgell, Wayne Davison, and others.\nWeb site: http://rsync.samba.org/\nCapabilities:\n    64-bit files, 64-bit inums, 64-bit timestamps, 64-bit long ints,\n    socketpairs, hardlinks, symlinks, IPv6, batchfiles, inplace,\n    append, ACLs, xattrs, iconv, symtimes, no prealloc, file-flags\n\nrsync comes with ABSOLUTELY NO WARRANTY.  This is free software, and you\nare welcome to redistribute it under certain conditions.  See the GNU\nGeneral Public Licence for details.\n\nrsync is a file transfer program capable of efficient remote update\nvia a fast differencing algorithm.\n\nUsage: rsync [OPTION]... SRC [SRC]... DEST\n  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST:DEST\n  or   rsync [OPTION]... SRC [SRC]... [USER@]HOST::DEST\n  or   rsync [OPTION]... SRC [SRC]... rsync://[USER@]HOST[:PORT]/DEST\n  or   rsync [OPTION]... [USER@]HOST:SRC [DEST]\n  or   rsync [OPTION]... [USER@]HOST::SRC [DEST]\n  or   rsync [OPTION]... rsync://[USER@]HOST[:PORT]/SRC [DEST]\nThe ':' usages connect via remote shell, while '::' & 'rsync://' usages connect\nto an rsync daemon, and require SRC or DEST to start with a module name.\n\nOptions\n -v, --verbose               increase verbosity\n     --info=FLAGS            fine-grained informational verbosity\n     --debug=FLAGS           fine-grained debug verbosity\n     --msgs2stderr           special output handling for debugging\n -q, --quiet                 suppress non-error messages\n     --no-motd               suppress daemon-mode MOTD (see manpage caveat)\n -c, --checksum              skip based on checksum, not mod-time & size\n -a, --archive               archive mode; equals -rlptgoD (no -H,-A,-X)\n     --no-OPTION             turn off an implied OPTION (e.g. --no-D)\n -r, --recursive             recurse into directories\n -R, --relative              use relative path names\n     --no-implied-dirs       don't send implied dirs with --relative\n -b, --backup                make backups (see --suffix & --backup-dir)\n     --backup-dir=DIR        make backups into hierarchy based in DIR\n     --suffix=SUFFIX         set backup suffix (default ~ w/o --backup-dir)\n -u, --update                skip files that are newer on the receiver\n     --inplace               update destination files in-place (SEE MAN PAGE)\n     --append                append data onto shorter files\n     --append-verify         like --append, but with old data in file checksum\n -d, --dirs                  transfer directories without recursing\n -l, --links                 copy symlinks as symlinks\n -L, --copy-links            transform symlink into referent file/dir\n     --copy-unsafe-links     only \"unsafe\" symlinks are transformed\n     --safe-links            ignore symlinks that point outside the source tree\n     --munge-links           munge symlinks to make them safer (but unusable)\n -k, --copy-dirlinks         transform symlink to a dir into referent dir\n -K, --keep-dirlinks         treat symlinked dir on receiver as dir\n -H, --hard-links            preserve hard links\n -p, --perms                 preserve permissions\n     --fileflags             preserve file-flags (aka chflags)\n -E, --executability         preserve the file's executability\n     --chmod=CHMOD           affect file and/or directory permissions\n -A, --acls                  preserve ACLs (implies --perms)\n -X, --xattrs                preserve extended attributes\n     --hfs-compression       preserve HFS compression if supported\n     --protect-decmpfs       preserve HFS compression as xattrs\n -o, --owner                 preserve owner (super-user only)\n -g, --group                 preserve group\n     --devices               preserve device files (super-user only)\n     --specials              preserve special files\n -D                          same as --devices --specials\n -t, --times                 preserve modification times\n -N, --crtimes               preserve create times (newness)\n -O, --omit-dir-times        omit directories from --times\n -J, --omit-link-times       omit symlinks from --times\n     --super                 receiver attempts super-user activities\n     --fake-super            store/recover privileged attrs using xattrs\n -S, --sparse                handle sparse files efficiently\n     --preallocate           pre-allocate dest files on remote receiver\n -n, --dry-run               perform a trial run with no changes made\n -W, --whole-file            copy files whole (without delta-xfer algorithm)\n -x, --one-file-system       don't cross filesystem boundaries\n -B, --block-size=SIZE       force a fixed checksum block-size\n -e, --rsh=COMMAND           specify the remote shell to use\n     --rsync-path=PROGRAM    specify the rsync to run on the remote machine\n     --existing              skip creating new files on receiver\n     --ignore-existing       skip updating files that already exist on receiver\n     --remove-source-files   sender removes synchronized files (non-dirs)\n     --del                   an alias for --delete-during\n     --delete                delete extraneous files from destination dirs\n     --delete-before         receiver deletes before transfer, not during\n     --delete-during         receiver deletes during the transfer\n     --delete-delay          find deletions during, delete after\n     --delete-after          receiver deletes after transfer, not during\n     --delete-excluded       also delete excluded files from destination dirs\n     --ignore-missing-args   ignore missing source args without error\n     --delete-missing-args   delete missing source args from destination\n     --ignore-errors         delete even if there are I/O errors\n     --force-delete          force deletion of directories even if not empty\n     --force-change          affect user-/system-immutable files/dirs\n     --force-uchange         affect user-immutable files/dirs\n     --force-schange         affect system-immutable files/dirs\n     --max-delete=NUM        don't delete more than NUM files\n     --max-size=SIZE         don't transfer any file larger than SIZE\n     --min-size=SIZE         don't transfer any file smaller than SIZE\n     --partial               keep partially transferred files\n     --partial-dir=DIR       put a partially transferred file into DIR\n     --delay-updates         put all updated files into place at transfer's end\n -m, --prune-empty-dirs      prune empty directory chains from the file-list\n     --numeric-ids           don't map uid/gid values by user/group name\n     --usermap=STRING        custom username mapping\n     --groupmap=STRING       custom groupname mapping\n     --chown=USER:GROUP      simple username/groupname mapping\n     --timeout=SECONDS       set I/O timeout in seconds\n     --contimeout=SECONDS    set daemon connection timeout in seconds\n -I, --ignore-times          don't skip files that match in size and mod-time\n -M, --remote-option=OPTION  send OPTION to the remote side only\n     --size-only             skip files that match in size\n     --modify-window=NUM     compare mod-times with reduced accuracy\n -T, --temp-dir=DIR          create temporary files in directory DIR\n -y, --fuzzy                 find similar file for basis if no dest file\n     --compare-dest=DIR      also compare destination files relative to DIR\n     --copy-dest=DIR         ... and include copies of unchanged files\n     --link-dest=DIR         hardlink to files in DIR when unchanged\n -z, --compress              compress file data during the transfer\n     --compress-level=NUM    explicitly set compression level\n     --skip-compress=LIST    skip compressing files with a suffix in LIST\n -C, --cvs-exclude           auto-ignore files the same way CVS does\n -f, --filter=RULE           add a file-filtering RULE\n -F                          same as --filter='dir-merge /.rsync-filter'\n                             repeated: --filter='- .rsync-filter'\n     --exclude=PATTERN       exclude files matching PATTERN\n     --exclude-from=FILE     read exclude patterns from FILE\n     --include=PATTERN       don't exclude files matching PATTERN\n     --include-from=FILE     read include patterns from FILE\n     --files-from=FILE       read list of source-file names from FILE\n -0, --from0                 all *-from/filter files are delimited by 0s\n -s, --protect-args          no space-splitting; only wildcard special-chars\n     --address=ADDRESS       bind address for outgoing socket to daemon\n     --port=PORT             specify double-colon alternate port number\n     --sockopts=OPTIONS      specify custom TCP options\n     --blocking-io           use blocking I/O for the remote shell\n     --stats                 give some file-transfer stats\n -8, --8-bit-output          leave high-bit chars unescaped in output\n -h, --human-readable        output numbers in a human-readable format\n     --progress              show progress during transfer\n -P                          same as --partial --progress\n -i, --itemize-changes       output a change-summary for all updates\n     --out-format=FORMAT     output updates using the specified FORMAT\n     --log-file=FILE         log what we're doing to the specified FILE\n     --log-file-format=FMT   log updates using the specified FMT\n     --password-file=FILE    read daemon-access password from FILE\n     --list-only             list the files instead of copying them\n     --bwlimit=RATE          limit socket I/O bandwidth\n     --outbuf=N|L|B          set output buffering to None, Line, or Block\n     --write-batch=FILE      write a batched update to FILE\n     --only-write-batch=FILE like --write-batch but w/o updating destination\n     --read-batch=FILE       read a batched update from FILE\n     --protocol=NUM          force an older protocol version to be used\n     --iconv=CONVERT_SPEC    request charset conversion of filenames\n     --checksum-seed=NUM     set block/file checksum seed (advanced)\n -4, --ipv4                  prefer IPv4\n -6, --ipv6                  prefer IPv6\n     --version               print version number\n(-h) --help                  show this help (-h is --help only if used alone)\n\nUse \"rsync --daemon --help\" to see the daemon-mode command-line options.\nPlease see the rsync(1) and rsyncd.conf(5) man pages for full documentation.\nSee http://rsync.samba.org/ for updates, bug reports, and answers\n")))}p.isMDXComponent=!0},556:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return f}));var t=r(0),s=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=s.a.createContext({}),p=function(e){var n=s.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?s.a.createElement(f,a(a({ref:n},l),{},{components:r})):s.a.createElement(f,a({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);