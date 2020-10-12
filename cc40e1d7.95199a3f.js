(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{469:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),c=(n(0),n(556)),l={id:"faq",title:"\u5e38\u89c1\u95ee\u9898"},i={unversionedId:"db/relational/postgresql/faq",id:"db/relational/postgresql/faq",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"PostgreSQL FAQ",source:"@site/contents/tricks/db/relational/postgresql/postgresql-faq.md",slug:"/db/relational/postgresql/faq",permalink:"/notes/db/relational/postgresql/faq",version:"current",sidebar:"docs",previous:{title:"\u7248\u672c\u5386\u53f2",permalink:"/notes/db/relational/postgresql/version"},next:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/postgresql-sql-faq"}},o=[{value:"\u7ef4\u62a4",id:"\u7ef4\u62a4",children:[]},{value:"How to Upgrade",id:"how-to-upgrade",children:[]},{value:"CTID",id:"ctid",children:[]},{value:"\u65f6\u533a\u95ee\u9898",id:"\u65f6\u533a\u95ee\u9898",children:[]},{value:"NULL \u5b57\u7b26 / <code>\0</code> \u5b57\u7b26",id:"null-\u5b57\u7b26--0-\u5b57\u7b26",children:[]},{value:"\u5207\u6362\u7528\u6237",id:"\u5207\u6362\u7528\u6237",children:[]},{value:"\u5207\u6362\u6570\u636e\u5e93",id:"\u5207\u6362\u6570\u636e\u5e93",children:[]},{value:"\u5bc6\u7801\u5b58\u50a8",id:"\u5bc6\u7801\u5b58\u50a8",children:[]},{value:"Calculating and Saving Space in PostgreSQL",id:"calculating-and-saving-space-in-postgresql",children:[]},{value:"unsupported Unicode escape sequence",id:"unsupported-unicode-escape-sequence",children:[]},{value:"psql \u5f00\u542f\u65f6\u95f4\u8bb0\u5f55",id:"psql-\u5f00\u542f\u65f6\u95f4\u8bb0\u5f55",children:[]},{value:"\u6570\u7ec4\u7d22\u5f15",id:"\u6570\u7ec4\u7d22\u5f15",children:[]},{value:"\u6570\u7ec4\u5916\u952e",id:"\u6570\u7ec4\u5916\u952e",children:[]},{value:"ERROR:  cannot alter type of a column used by a view or rule",id:"error--cannot-alter-type-of-a-column-used-by-a-view-or-rule",children:[]},{value:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406",id:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406",children:[]},{value:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f",id:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f",children:[]},{value:"IN vs any",id:"in-vs-any",children:[]}],s={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"postgresql-faq"},"PostgreSQL FAQ"),Object(c.b)("h2",{id:"\u7ef4\u62a4"},"\u7ef4\u62a4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://gist.github.com/rgreenjr/3637525"}),"postgres_queries_and_commands.sql")," - Useful PostgreSQL Queries and Commands")),Object(c.b)("h2",{id:"how-to-upgrade"},"How to Upgrade"),Object(c.b)("p",null,"\u53ef\u4ee5\u6784\u9020\u4e00\u4e2a\u5305\u542b\u6240\u6709\u7248\u672c\u7684\u955c\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u5347\u7ea7 - ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postgres/pgadmin4/blob/master/Dockerfile"}),"Dockerfile")),Object(c.b)("h2",{id:"ctid"},"CTID"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://dba.stackexchange.com/questions/203989/what-is-the-data-type-of-the-ctid-system-column-in-postgres"}),"https://dba.stackexchange.com/questions/203989/what-is-the-data-type-of-the-ctid-system-column-in-postgres")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://postgresql.verite.pro/blog/2019/04/24/oid-column.html"}),"https://postgresql.verite.pro/blog/2019/04/24/oid-column.html")),Object(c.b)("h2",{id:"\u65f6\u533a\u95ee\u9898"},"\u65f6\u533a\u95ee\u9898"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"PG \u5b9e\u9645\u5b58\u50a8\u7684\u662f UTC \u4e0d\u4f1a\u5b58\u50a8\u65f6\u533a"),Object(c.b)("li",{parentName:"ul"},"\u65f6\u533a\u4fe1\u606f\u4f1a\u7528\u4e8e\u8f6c\u6362")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- \u5f53\u524d\u65f6\u533a\nshow timezone;\nshow timezone_abbreviations;\n-- \u53ef\u7528\u65f6\u533a\nSELECT * FROM pg_timezone_names;\n\n-- date \u8f6c tz \u5e94\u8be5\u662f\u6b63\u5e38\u7684\nselect ('2020-01-02'::date)::TIMESTAMPTZ;\n\n-- session \u6709\u6548\nSET TIME ZONE TO 'UTC';\nSET TIMEZONE TO 'UTC';\n-- \u4e5f\u53ef\u4ee5\u76f4\u63a5\u6307\u5b9a offset\nSET timezone=-4;\n\n-- \u5f53\u524d\u65f6\u95f4\n-- UTC \u53ef\u4ee5\u4f7f\u7528 localtime\nSELECT LOCALTIMESTAMP AT TIME ZONE 'Asia/Shanghai';\n-- timestamp \u4e0d\u663e\u793a TZ \u4fe1\u606f\nSELECT NOW()::TIMESTAMP;\n-- current_timestamp \u662f timestamptz\n-- \u53ef\u4ee5\u63d0\u53d6 tz \u4fe1\u606f \u79d2\u3001\u5c0f\u65f6\nselect current_timestamp,\n       pg_typeof(current_timestamp),\n       extract(timezone from current_timestamp::timestamptz),\n       extract(timezone_h from current_timestamp::timestamptz)\n;\n\n-- db \u914d\u7f6e\nALTER SYSTEM SET timezone = 'UTC';\n\n-- \u4fee\u6539\u89d2\u8272\u65f6\u533a\nALTER ROLE my_role SET TIMEZONE = '+1';\n")),Object(c.b)("h2",{id:"null-\u5b57\u7b26--0-\u5b57\u7b26"},"NULL \u5b57\u7b26 / ",Object(c.b)("inlineCode",{parentName:"h2"},"\\0")," \u5b57\u7b26"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"PG \u4e0d\u5141\u8bb8\u5b57\u7b26\u4e32\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"li"},"\\0")),Object(c.b)("li",{parentName:"ul"},"\u4f20\u5165\u4e4b\u524d\u66ff\u6362\u6216\u7528 bytea \u5b58\u50a8"),Object(c.b)("li",{parentName:"ul"},"JSON \u4e5f\u4e0d\u5141\u8bb8\u5305\u542b\u7a7a\u5b57\u7b26")),Object(c.b)("h2",{id:"\u5207\u6362\u7528\u6237"},"\u5207\u6362\u7528\u6237"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"set role user;\n")),Object(c.b)("h2",{id:"\u5207\u6362\u6570\u636e\u5e93"},"\u5207\u6362\u6570\u636e\u5e93"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53ea\u80fd\u91cd\u65b0\u94fe\u63a5")),Object(c.b)("h2",{id:"\u5bc6\u7801\u5b58\u50a8"},"\u5bc6\u7801\u5b58\u50a8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/pgcrypto.html"}),"pgcrypto")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html"}),"Hashed Passwords with PostgreSQL's pgcrypto")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/15733196/where-2x-prefix-are-used-in-bcrypt"}),"https://stackoverflow.com/questions/15733196/where-2x-prefix-are-used-in-bcrypt"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- \u751f\u6210 Hash\nselect crypt('12345', gen_salt('bf', 8));\n-- \u5224\u65ad\u5bc6\u7801\u76f8\u7b49\nselect crypt('12345', password) = password\n\n-- PG \u65e0\u6cd5\u5904\u7406 2b - \u6216\u8005\u63d2\u5165\u65f6\u4fee\u6539\u4e3a 2a\nselect *\nfrom users\nwhere username = 'admin'\n  and  regexp_replace(password,'^[$]2b','$2a') = crypt('admin', regexp_replace(salt,'^[$]2b','$2a'));\n")),Object(c.b)("h2",{id:"calculating-and-saving-space-in-postgresql"},"Calculating and Saving Space in PostgreSQL"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/a/7431468/1870054"}),"Column Tetris")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://news.ycombinator.com/item?id=16471242"}),"HN")),Object(c.b)("li",{parentName:"ul"},"\u6bcf\u79cd\u6570\u636e\u7c7b\u578b\u90fd\u6709\u7279\u5b9a\u7684\u5bf9\u9f50\u8981\u6c42 - ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/catalog-pg-type.html"}),"pg-type")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/app-pgcontroldata.html"}),"pg_controldata"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u83b7\u53d6\u6570\u636e\u7684\u65cf\u7fa4\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"Maximum data alignment \u663e\u793a\u6570\u636e\u7684\u5bf9\u9f50\u8981\u6c42"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/functions-admin.html#FUNCTIONS-ADMIN-DBSIZE"}),"Database Object Size Functions"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pg_controldata data/\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- \u5217\u5bbd\nselect pg_column_size('int');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"pg_control version number:            1002\nCatalog version number:               201707211\nDatabase system identifier:           6502788473953883273\nDatabase cluster state:               in production\npg_control last modified:             \u4e94  3/ 9 12:04:15 2018\nLatest checkpoint location:           0/32F8A88\nPrior checkpoint location:            0/32DA0D0\nLatest checkpoint's REDO location:    0/32F8A50\nLatest checkpoint's REDO WAL file:    000000010000000000000003\nLatest checkpoint's TimeLineID:       1\nLatest checkpoint's PrevTimeLineID:   1\nLatest checkpoint's full_page_writes: on\nLatest checkpoint's NextXID:          0:730\nLatest checkpoint's NextOID:          25609\nLatest checkpoint's NextMultiXactId:  1\nLatest checkpoint's NextMultiOffset:  0\nLatest checkpoint's oldestXID:        548\nLatest checkpoint's oldestXID's DB:   1\nLatest checkpoint's oldestActiveXID:  730\nLatest checkpoint's oldestMultiXid:   1\nLatest checkpoint's oldestMulti's DB: 1\nLatest checkpoint's oldestCommitTsXid:0\nLatest checkpoint's newestCommitTsXid:0\nTime of latest checkpoint:            \u4e94  3/ 9 12:04:12 2018\nFake LSN counter for unlogged rels:   0/1\nMinimum recovery ending location:     0/0\nMin recovery ending loc's timeline:   0\nBackup start location:                0/0\nBackup end location:                  0/0\nEnd-of-backup record required:        no\nwal_level setting:                    replica\nwal_log_hints setting:                off\nmax_connections setting:              100\nmax_worker_processes setting:         8\nmax_prepared_xacts setting:           200\nmax_locks_per_xact setting:           64\ntrack_commit_timestamp setting:       off\nMaximum data alignment:               8\nDatabase block size:                  8192\nBlocks per segment of large relation: 131072\nWAL block size:                       8192\nBytes per WAL segment:                16777216\nMaximum length of identifiers:        64\nMaximum columns in an index:          32\nMaximum size of a TOAST chunk:        1996\nSize of a large-object chunk:         2048\nDate/time type storage:               64-bit integers\nFloat4 argument passing:              by value\nFloat8 argument passing:              by value\nData page checksum version:           1\nMock authentication nonce:            32f8310a0cf344f7c1432dd733d3cf6065b748697485724af31fbaf7605f50bc\n")),Object(c.b)("h2",{id:"unsupported-unicode-escape-sequence"},"unsupported Unicode escape sequence"),Object(c.b)("p",null,"\u4e00\u822c\u662f\u56e0\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"\\u0000"),", \u66ff\u6362\u6389\u5373\u53ef, pg \u7684\u5b57\u7b26\u4e32\u4e0d\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"\\u0000")),Object(c.b)("h2",{id:"psql-\u5f00\u542f\u65f6\u95f4\u8bb0\u5f55"},"psql \u5f00\u542f\u65f6\u95f4\u8bb0\u5f55"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"\\timing"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u76f4\u63a5\u547d\u4ee4\u884c\u4f7f\u7528\npsql -c '\\timing' -c 'select 1'\n")),Object(c.b)("h2",{id:"\u6570\u7ec4\u7d22\u5f15"},"\u6570\u7ec4\u7d22\u5f15"),Object(c.b)("p",null,"GIN \u7d22\u5f15\u662f\u53cd\u5411\u7d22\u5f15(inverted indexes), \u9002\u7528\u4e8e\u5305\u542b\u591a\u4e2a\u503c\u7684\u60c5\u51b5."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u64cd\u4f5c\u7b26",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"<@")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"@>")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"=")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"&&"))))),Object(c.b)("h2",{id:"\u6570\u7ec4\u5916\u952e"},"\u6570\u7ec4\u5916\u952e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301")),Object(c.b)("h2",{id:"error--cannot-alter-type-of-a-column-used-by-a-view-or-rule"},"ERROR:  cannot alter type of a column used by a view or rule"),Object(c.b)("p",null,"\u5fc5\u987b\u8981\u5148 drop view \u518d\u64cd\u4f5c, \u76ee\u524d\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u64cd\u4f5c\u65b9\u5f0f, \u4f46\u64cd\u4f5c\u90fd\u53ef\u4ee5\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u5b8c\u6210"),Object(c.b)("p",null,"\u6709\u4e9b\u4fee\u6539\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u4fee\u6539 pg_attribute \u6765\u8fbe\u5230\u76ee\u7684, \u4f46\u662f\u975e\u5e38\u4e0d\u5efa\u8bae."),Object(c.b)("h2",{id:"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406"},"\u65f6\u95f4\u6233\u4e0a\u7684\u6beb\u79d2\u5904\u7406"),Object(c.b)("p",null,"\u76ee\u524d\u6ca1\u6709\u6bd4\u8f83\u597d\u7684\u5904\u7406\u65b9\u5f0f"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"-- \u5c06\u4e00\u4e2a\u6beb\u79d2\u7684 ts \u8f6c\u4e3a timestamp \u7c7b\u578b\nALTER TABLE  my_info\n  ALTER COLUMN tstmp TYPE TIMESTAMP USING to_timestamp(tstmp / 1000) + ((tstmp % 1000) || ' milliseconds') :: INTERVAL;\n")),Object(c.b)("h2",{id:"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f"},"\u67e5\u8be2\u8bed\u53e5\u7684\u6700\u5927\u5927\u5c0f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e3a 1G"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://dba.stackexchange.com/q/131399"}),"Is there a maximum length constraint for a postgres query?")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/postgres/postgres/blob/REL_10_1/src/common/psprintf.c#L28"}),"src/common/psprintf.c#L28"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"#define MaxAllocSize   ((Size) 0x3fffffff) /* 1 gigabyte - 1 */\n")),Object(c.b)("h2",{id:"in-vs-any"},"IN vs any"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/a/28995514/1870054"}),"https://stackoverflow.com/a/28995514/1870054")),Object(c.b)("li",{parentName:"ul"},"IN",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Bitmap \u626b\u63cf"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\u65f6, \u6267\u884c\u65f6\u95f4\u66f4\u6162\u8ba1\u5212\u65f6\u95f4\u66f4\u4e45"))),Object(c.b)("li",{parentName:"ul"},"ANY",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4f1a\u4f7f\u7528\u4e34\u65f6\u8868\u505a JOIN"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\u65f6, \u6267\u884c\u65f6\u95f4\u66f4\u4e45\u8ba1\u5212\u65f6\u95f4\u66f4\u5feb")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE test (\n  id  BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,\n  val TEXT\n);\n\n-- \u63d2\u5165\u6d4b\u8bd5\u6570\u636e\nDO\n$$\nBEGIN\n  FOR i IN 1..100000 LOOP\n    INSERT INTO test (val) VALUES ('val#' || i);\n  END LOOP;\nEND\n$$;\n\nEXPLAIN SELECT *\n        FROM test\n        WHERE id IN (1, 2, 3);\n\nEXPLAIN SELECT *\n        FROM test\n        WHERE id = ANY (VALUES (1), (2), (3));\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'# IN\nBitmap Heap Scan on test  (cost=12.86..19.97 rows=3 width=40)\n  Recheck Cond: (id = ANY (\'{1,2,3}\'::bigint[]))\n  ->  Bitmap Index Scan on test_pkey  (cost=0.00..12.86 rows=3 width=0)\n        Index Cond: (id = ANY (\'{1,2,3}\'::bigint[]))\n\n# ANY\nNested Loop  (cost=0.32..25.00 rows=3 width=40)\n  ->  HashAggregate  (cost=0.05..0.08 rows=3 width=4)\n        Group Key: ""*VALUES*"".column1\n        ->  Values Scan on ""*VALUES*""  (cost=0.00..0.04 rows=3 width=4)\n  ->  Index Scan using test_pkey on test  (cost=0.28..8.29 rows=1 width=40)\n        Index Cond: (id = ""*VALUES*"".column1)\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"-- \u6d4b\u8bd5 IN\nDO\n$$\nDECLARE\n  x   TEXT = '';\n  r   REFCURSOR;\n  rec RECORD;\nBEGIN\n  x = '0';\n  FOR i IN 1..1000 LOOP\n    x = x || ',' || i;\n  END LOOP;\n  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *\n        FROM test\n        WHERE id IN (' || x || ')';\n\n  FOR i IN 1..6 LOOP\n    FETCH r INTO rec;\n    RAISE NOTICE 'ROW %', rec;\n  END LOOP;\nEND\n$$;\n\n-- \u6d4b\u8bd5 ANY\nDO\n$$\nDECLARE\n  x   TEXT;\n  r   REFCURSOR;\n  rec RECORD;\nBEGIN\n  x = '(0)';\n  FOR i IN 1..1000 LOOP\n    x = x || ',(' || i || ')';\n  END LOOP;\n  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *\n        FROM test\n        WHERE id = any (VALUES ' || x || ')';\n\n  FOR i IN 1..10 LOOP\n    FETCH r INTO rec;\n    RAISE NOTICE 'ROW %', rec;\n  END LOOP;\nEND\n$$;\n")))}b.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(O,i(i({ref:t},s),{},{components:n})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);