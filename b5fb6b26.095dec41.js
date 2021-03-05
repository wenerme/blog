(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{585:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(3),i=t(8),a=(t(0),t(787)),r={id:"virsh",title:"Virsh"},s={unversionedId:"os/virt/virsh",id:"os/virt/virsh",isDocsHomePage:!1,title:"Virsh",description:"Tips",source:"@site/notes/os/virt/libvirt-virsh.md",slug:"/os/virt/virsh",permalink:"/notes/os/virt/virsh",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/libvirt-virsh.md",version:"current",sidebar:"docs",previous:{title:"Libvirt \u7f51\u7edc",permalink:"/notes/os/virt/libvirt-net"},next:{title:"Libvirt",permalink:"/notes/os/virt/libvirt"}},c=[{value:"Tips",id:"tips",children:[]},{value:"clone",id:"clone",children:[]},{value:"migration",id:"migration",children:[]},{value:"error from service: CheckAuthorization: The name org.freedesktop.PolicyKit1 was not provided by any .service files",id:"error-from-service-checkauthorization-the-name-orgfreedesktoppolicykit1-was-not-provided-by-any-service-files",children:[]},{value:"Unable to get DBus system bus connection: Failed to connect to socket /var/run/dbus/system_bus_socket: No such file or directory",id:"unable-to-get-dbus-system-bus-connection-failed-to-connect-to-socket-varrundbussystem_bus_socket-no-such-file-or-directory",children:[]},{value:"error from service: CheckAuthorization: The name org.freedesktop.PolicyKit1 was not provided by any .service files",id:"error-from-service-checkauthorization-the-name-orgfreedesktoppolicykit1-was-not-provided-by-any-service-files-1",children:[]},{value:"sudo virsh hang",id:"sudo-virsh-hang",children:[]},{value:"virsh list hang",id:"virsh-list-hang",children:[]},{value:"Help",id:"help",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5f00\u673a\nvirsh start {domain}\n# \u5173\u673a\u3001\u65ad\u7535\nvirsh destroy {domain}\n# \u89e6\u53d1\u5173\u673a - \u9700\u8981\u652f\u6301 ACPI\nvirsh shutdown {doamin}\n# \u91cd\u542f - \u9700\u8981\u652f\u6301 ACPI\nvirsh reboot {doamin}\n\n# \u8fd0\u884c\u7684\u4e3b\u673a\u5217\u8868\nvirsh list\n# \u6240\u6709\u7684\u4e3b\u673a\u5217\u8868\nvirsh list --all\n\n# \u63a7\u5236\u53f0\u8bbf\u95ee\n# CTRL+] \u9000\u51fa\nvirsh console DOMAIN\n\n# \u5b9a\u4e49\u4e3b\u673a\nvirsh define domain.xml\n\n# \u91cd\u547d\u540d\n# \u5982\u679c\u901a\u8fc7 xml \u9700\u8981 undefine \u518d define\nvirsh domrename {domain} {new-name}\n\n# \u5185\u5b58\u72b6\u6001\nvirsh dommemstat {domain}\n")),Object(a.b)("h2",{id:"clone"},"clone"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"virt-clone --original base --name k3s --file /data/vm/images/k3s.qcow2\n")),Object(a.b)("h2",{id:"migration"},"migration"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://libvirt.org/migration.html"},"https://libvirt.org/migration.html"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"virsh migrate web1 qemu+ssh://desthost/system\n")),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"error-from-service-checkauthorization-the-name-orgfreedesktoppolicykit1-was-not-provided-by-any-service-files"},"error from service: CheckAuthorization: The name org.freedesktop.PolicyKit1 was not provided by any .service files"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"qemu+ssh://admin@host/system")," - \u53ef\u80fd\u662f\u6ca1\u6709\u6743\u9650")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"/etc/libvirt/libvirtd.conf")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},'# \u5141\u8bb8\u5206\u7ec4\u8bbf\u95ee\nunix_sock_group = "libvirt"\nunix_sock_rw_perms = "0770"\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u7528\u6237\u5230\u5206\u7ec4\nusermod -G libvirtd -a username\n\n# \u9a8c\u8bc1\nvirsh -c qemu:///system list\n")),Object(a.b)("h2",{id:"unable-to-get-dbus-system-bus-connection-failed-to-connect-to-socket-varrundbussystem_bus_socket-no-such-file-or-directory"},"Unable to get DBus system bus connection: Failed to connect to socket /var/run/dbus/system_bus_socket: No such file or directory"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u786e\u4fdd dbus \u542f\u52a8"),Object(a.b)("li",{parentName:"ul"},"\u53ef\u80fd\u8fd8\u9700\u8981\u91cd\u542f libvirtd")),Object(a.b)("h2",{id:"error-from-service-checkauthorization-the-name-orgfreedesktoppolicykit1-was-not-provided-by-any-service-files-1"},"error from service: CheckAuthorization: The name org.freedesktop.PolicyKit1 was not provided by any .service files"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"apk add polkit\n")),Object(a.b)("h2",{id:"sudo-virsh-hang"},"sudo virsh hang"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"killall -9 dmidecode\n")),Object(a.b)("h2",{id:"virsh-list-hang"},"virsh list hang"),Object(a.b)("h2",{id:"help"},"Help"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ virsh --help\n\nvirsh [options]... [<command_string>]\nvirsh [options]... <command> [args...]\n\n  options:\n    -c | --connect=URI      hypervisor connection URI\n    -d | --debug=NUM        debug level [0-4]\n    -e | --escape <char>    set escape sequence for console\n    -h | --help             this help\n    -k | --keepalive-interval=NUM\n                            keepalive interval in seconds, 0 for disable\n    -K | --keepalive-count=NUM\n                            number of possible missed keepalive messages\n    -l | --log=FILE         output logging to file\n    -q | --quiet            quiet mode\n    -r | --readonly         connect readonly\n    -t | --timing           print timing information\n    -v                      short version\n    -V                      long version\n         --version[=TYPE]   version, TYPE is short or long (default short)\n  commands (non interactive mode):\n\n Domain Management (help keyword 'domain')\n    attach-device                  attach device from an XML file\n    attach-disk                    attach disk device\n    attach-interface               attach network interface\n    autostart                      autostart a domain\n    blkdeviotune                   Set or query a block device I/O tuning parameters.\n    blkiotune                      Get or set blkio parameters\n    blockcommit                    Start a block commit operation.\n    blockcopy                      Start a block copy operation.\n    blockjob                       Manage active block operations\n    blockpull                      Populate a disk from its backing image.\n    blockresize                    Resize block device of domain.\n    change-media                   Change media of CD or floppy drive\n    console                        connect to the guest console\n    cpu-stats                      show domain cpu statistics\n    create                         create a domain from an XML file\n    define                         define (but don't start) a domain from an XML file\n    desc                           show or set domain's description or title\n    destroy                        destroy (stop) a domain\n    detach-device                  detach device from an XML file\n    detach-device-alias            detach device from an alias\n    detach-disk                    detach disk device\n    detach-interface               detach network interface\n    domdisplay                     domain display connection URI\n    domfsfreeze                    Freeze domain's mounted filesystems.\n    domfsthaw                      Thaw domain's mounted filesystems.\n    domfsinfo                      Get information of domain's mounted filesystems.\n    domfstrim                      Invoke fstrim on domain's mounted filesystems.\n    domhostname                    print the domain's hostname\n    domid                          convert a domain name or UUID to domain id\n    domif-setlink                  set link state of a virtual interface\n    domiftune                      get/set parameters of a virtual interface\n    domjobabort                    abort active domain job\n    domjobinfo                     domain job information\n    domname                        convert a domain id or UUID to domain name\n    domrename                      rename a domain\n    dompmsuspend                   suspend a domain gracefully using power management functions\n    dompmwakeup                    wakeup a domain from pmsuspended state\n    domuuid                        convert a domain name or id to domain UUID\n    domxml-from-native             Convert native config to domain XML\n    domxml-to-native               Convert domain XML to native config\n    dump                           dump the core of a domain to a file for analysis\n    dumpxml                        domain information in XML\n    edit                           edit XML configuration for a domain\n    event                          Domain Events\n    inject-nmi                     Inject NMI to the guest\n    iothreadinfo                   view domain IOThreads\n    iothreadpin                    control domain IOThread affinity\n    iothreadadd                    add an IOThread to the guest domain\n    iothreadset                    modifies an existing IOThread of the guest domain\n    iothreaddel                    delete an IOThread from the guest domain\n    send-key                       Send keycodes to the guest\n    send-process-signal            Send signals to processes\n    lxc-enter-namespace            LXC Guest Enter Namespace\n    managedsave                    managed save of a domain state\n    managedsave-remove             Remove managed save of a domain\n    managedsave-edit               edit XML for a domain's managed save state file\n    managedsave-dumpxml            Domain information of managed save state file in XML\n    managedsave-define             redefine the XML for a domain's managed save state file\n    memtune                        Get or set memory parameters\n    perf                           Get or set perf event\n    metadata                       show or set domain's custom XML metadata\n    migrate                        migrate domain to another host\n    migrate-setmaxdowntime         set maximum tolerable downtime\n    migrate-getmaxdowntime         get maximum tolerable downtime\n    migrate-compcache              get/set compression cache size\n    migrate-setspeed               Set the maximum migration bandwidth\n    migrate-getspeed               Get the maximum migration bandwidth\n    migrate-postcopy               Switch running migration from pre-copy to post-copy\n    numatune                       Get or set numa parameters\n    qemu-attach                    QEMU Attach\n    qemu-monitor-command           QEMU Monitor Command\n    qemu-monitor-event             QEMU Monitor Events\n    qemu-agent-command             QEMU Guest Agent Command\n    guest-agent-timeout            Set the guest agent timeout\n    reboot                         reboot a domain\n    reset                          reset a domain\n    restore                        restore a domain from a saved state in a file\n    resume                         resume a domain\n    save                           save a domain state to a file\n    save-image-define              redefine the XML for a domain's saved state file\n    save-image-dumpxml             saved state domain information in XML\n    save-image-edit                edit XML for a domain's saved state file\n    schedinfo                      show/set scheduler parameters\n    screenshot                     take a screenshot of a current domain console and store it into a file\n    set-lifecycle-action           change lifecycle actions\n    set-user-password              set the user password inside the domain\n    setmaxmem                      change maximum memory limit\n    setmem                         change memory allocation\n    setvcpus                       change number of virtual CPUs\n    shutdown                       gracefully shutdown a domain\n    start                          start a (previously defined) inactive domain\n    suspend                        suspend a domain\n    ttyconsole                     tty console\n    undefine                       undefine a domain\n    update-device                  update device from an XML file\n    vcpucount                      domain vcpu counts\n    vcpuinfo                       detailed domain vcpu information\n    vcpupin                        control or query domain vcpu affinity\n    emulatorpin                    control or query domain emulator affinity\n    vncdisplay                     vnc display\n    guestvcpus                     query or modify state of vcpu in the guest (via agent)\n    setvcpu                        attach/detach vcpu or groups of threads\n    domblkthreshold                set the threshold for block-threshold event for a given block device or it's backing chain element\n    guestinfo                      query information about the guest (via agent)\n\n Domain Monitoring (help keyword 'monitor')\n    domblkerror                    Show errors on block devices\n    domblkinfo                     domain block device size information\n    domblklist                     list all domain blocks\n    domblkstat                     get device block stats for a domain\n    domcontrol                     domain control interface state\n    domif-getlink                  get link state of a virtual interface\n    domifaddr                      Get network interfaces' addresses for a running domain\n    domiflist                      list all domain virtual interfaces\n    domifstat                      get network interface stats for a domain\n    dominfo                        domain information\n    dommemstat                     get memory statistics for a domain\n    domstate                       domain state\n    domstats                       get statistics about one or multiple domains\n    domtime                        domain time\n    list                           list domains\n\n Host and Hypervisor (help keyword 'host')\n    allocpages                     Manipulate pages pool size\n    capabilities                   capabilities\n    cpu-baseline                   compute baseline CPU\n    cpu-compare                    compare host CPU with a CPU described by an XML file\n    cpu-models                     CPU models\n    domcapabilities                domain capabilities\n    freecell                       NUMA free memory\n    freepages                      NUMA free pages\n    hostname                       print the hypervisor hostname\n    hypervisor-cpu-baseline        compute baseline CPU usable by a specific hypervisor\n    hypervisor-cpu-compare         compare a CPU with the CPU created by a hypervisor on the host\n    maxvcpus                       connection vcpu maximum\n    node-memory-tune               Get or set node memory parameters\n    nodecpumap                     node cpu map\n    nodecpustats                   Prints cpu stats of the node.\n    nodeinfo                       node information\n    nodememstats                   Prints memory stats of the node.\n    nodesuspend                    suspend the host node for a given time duration\n    sysinfo                        print the hypervisor sysinfo\n    uri                            print the hypervisor canonical URI\n    version                        show version\n\n Checkpoint (help keyword 'checkpoint')\n    checkpoint-create              Create a checkpoint from XML\n    checkpoint-create-as           Create a checkpoint from a set of args\n    checkpoint-delete              Delete a domain checkpoint\n    checkpoint-dumpxml             Dump XML for a domain checkpoint\n    checkpoint-edit                edit XML for a checkpoint\n    checkpoint-info                checkpoint information\n    checkpoint-list                List checkpoints for a domain\n    checkpoint-parent              Get the name of the parent of a checkpoint\n\n Interface (help keyword 'interface')\n    iface-begin                    create a snapshot of current interfaces settings, which can be later committed (iface-commit) or restored (iface-rollback)\n    iface-bridge                   create a bridge device and attach an existing network device to it\n    iface-commit                   commit changes made since iface-begin and free restore point\n    iface-define                   define an inactive persistent physical host interface or modify an existing persistent one from an XML file\n    iface-destroy                  destroy a physical host interface (disable it / \"if-down\")\n    iface-dumpxml                  interface information in XML\n    iface-edit                     edit XML configuration for a physical host interface\n    iface-list                     list physical host interfaces\n    iface-mac                      convert an interface name to interface MAC address\n    iface-name                     convert an interface MAC address to interface name\n    iface-rollback                 rollback to previous saved configuration created via iface-begin\n    iface-start                    start a physical host interface (enable it / \"if-up\")\n    iface-unbridge                 undefine a bridge device after detaching its device(s)\n    iface-undefine                 undefine a physical host interface (remove it from configuration)\n\n Network Filter (help keyword 'filter')\n    nwfilter-define                define or update a network filter from an XML file\n    nwfilter-dumpxml               network filter information in XML\n    nwfilter-edit                  edit XML configuration for a network filter\n    nwfilter-list                  list network filters\n    nwfilter-undefine              undefine a network filter\n    nwfilter-binding-create        create a network filter binding from an XML file\n    nwfilter-binding-delete        delete a network filter binding\n    nwfilter-binding-dumpxml       network filter information in XML\n    nwfilter-binding-list          list network filter bindings\n\n Networking (help keyword 'network')\n    net-autostart                  autostart a network\n    net-create                     create a network from an XML file\n    net-define                     define an inactive persistent virtual network or modify an existing persistent one from an XML file\n    net-destroy                    destroy (stop) a network\n    net-dhcp-leases                print lease info for a given network\n    net-dumpxml                    network information in XML\n    net-edit                       edit XML configuration for a network\n    net-event                      Network Events\n    net-info                       network information\n    net-list                       list networks\n    net-name                       convert a network UUID to network name\n    net-start                      start a (previously defined) inactive network\n    net-undefine                   undefine a persistent network\n    net-update                     update parts of an existing network's configuration\n    net-uuid                       convert a network name to network UUID\n    net-port-list                  list network ports\n    net-port-create                create a network port from an XML file\n    net-port-dumpxml               network port information in XML\n    net-port-delete                delete the specified network port\n\n Node Device (help keyword 'nodedev')\n    nodedev-create                 create a device defined by an XML file on the node\n    nodedev-destroy                destroy (stop) a device on the node\n    nodedev-detach                 detach node device from its device driver\n    nodedev-dumpxml                node device details in XML\n    nodedev-list                   enumerate devices on this host\n    nodedev-reattach               reattach node device to its device driver\n    nodedev-reset                  reset node device\n    nodedev-event                  Node Device Events\n\n Secret (help keyword 'secret')\n    secret-define                  define or modify a secret from an XML file\n    secret-dumpxml                 secret attributes in XML\n    secret-event                   Secret Events\n    secret-get-value               Output a secret value\n    secret-list                    list secrets\n    secret-set-value               set a secret value\n    secret-undefine                undefine a secret\n\n Snapshot (help keyword 'snapshot')\n    snapshot-create                Create a snapshot from XML\n    snapshot-create-as             Create a snapshot from a set of args\n    snapshot-current               Get or set the current snapshot\n    snapshot-delete                Delete a domain snapshot\n    snapshot-dumpxml               Dump XML for a domain snapshot\n    snapshot-edit                  edit XML for a snapshot\n    snapshot-info                  snapshot information\n    snapshot-list                  List snapshots for a domain\n    snapshot-parent                Get the name of the parent of a snapshot\n    snapshot-revert                Revert a domain to a snapshot\n\n Backup (help keyword 'backup')\n    backup-begin                   Start a disk backup of a live domain\n    backup-dumpxml                 Dump XML for an ongoing domain block backup job\n\n Storage Pool (help keyword 'pool')\n    find-storage-pool-sources-as   find potential storage pool sources\n    find-storage-pool-sources      discover potential storage pool sources\n    pool-autostart                 autostart a pool\n    pool-build                     build a pool\n    pool-create-as                 create a pool from a set of args\n    pool-create                    create a pool from an XML file\n    pool-define-as                 define a pool from a set of args\n    pool-define                    define an inactive persistent storage pool or modify an existing persistent one from an XML file\n    pool-delete                    delete a pool\n    pool-destroy                   destroy (stop) a pool\n    pool-dumpxml                   pool information in XML\n    pool-edit                      edit XML configuration for a storage pool\n    pool-info                      storage pool information\n    pool-list                      list pools\n    pool-name                      convert a pool UUID to pool name\n    pool-refresh                   refresh a pool\n    pool-start                     start a (previously defined) inactive pool\n    pool-undefine                  undefine an inactive pool\n    pool-uuid                      convert a pool name to pool UUID\n    pool-event                     Storage Pool Events\n    pool-capabilities              storage pool capabilities\n\n Storage Volume (help keyword 'volume')\n    vol-clone                      clone a volume.\n    vol-create-as                  create a volume from a set of args\n    vol-create                     create a vol from an XML file\n    vol-create-from                create a vol, using another volume as input\n    vol-delete                     delete a vol\n    vol-download                   download volume contents to a file\n    vol-dumpxml                    vol information in XML\n    vol-info                       storage vol information\n    vol-key                        returns the volume key for a given volume name or path\n    vol-list                       list vols\n    vol-name                       returns the volume name for a given volume key or path\n    vol-path                       returns the volume path for a given volume name or key\n    vol-pool                       returns the storage pool for a given volume key or path\n    vol-resize                     resize a vol\n    vol-upload                     upload file contents to a volume\n    vol-wipe                       wipe a vol\n\n Virsh itself (help keyword 'virsh')\n    cd                             change the current directory\n    echo                           echo arguments\n    exit                           quit this interactive terminal\n    help                           print help\n    pwd                            print the current directory\n    quit                           quit this interactive terminal\n    connect                        (re)connect to hypervisor\n\n\n  (specify help <group> for details about the commands in the group)\n\n  (specify help <command> for details about the command)\n")))}l.isMDXComponent=!0},787:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,u=m["".concat(r,".").concat(f)]||m[f]||p[f]||a;return t?i.a.createElement(u,s(s({ref:n},d),{},{components:t})):i.a.createElement(u,s({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);