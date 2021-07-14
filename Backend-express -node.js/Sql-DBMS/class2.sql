-- SQL (Structured Query Language)
-- NOW YAHA pe SQ-Language sikhenge, as apn ess Language se Data ko deal kr skteh hai mtlb Data ko ek neat and clean way meh Organize kr skteh hai jaise apn Data ko store , retrieve , delete etc..etc orr bhi bohat kuch kr skteh hai.
-- note: Data mtlb information in the e-form. mtlb information ko e-form meh convert kiya jata hai and ess converted form of information ko simply Data kaha jata hai. toh thus aab se data mtlb information hi hota hai.

-- as SQL bohat important hai and isiliy apn yeh course kr rhe hai.

-- SO now YAHA pe apn serial-wise yeh-yeh Topics study krenge..

/*  1.what is Database
    2.Introduction to DBMS(database Management System) and SQL  
(as simply boleh DBMS simply softwares hoteh database ko manage krne k liyeh)
    3.Normalization
    4.Subsets of SQL:
      DDL(data defination Language) ,
      DML(data manipulation language)
      DCL(data control language),
      TCL( Transaction control Language)
    5.SQL operators
    6.SQL functions
    7.SQL joins
    8.Lab-Session (yaha esmeh apn 3-mini projects krenge, mtlb apne pass 3-diff data-sets honge and unko apn SQL se deal krenge, mtlb unn data ko store, retrieve ,delete , update etc.. kaam krenge. )

*/

🌟##1: What is Database
/* Database ek simply Organised-information( data ) ka Collection hota hai. where Organised-Information ka mtlb voh Information jisko easily access(mtlb search and get) , manage and maintain kiya ja skta hai. and enn information ko SQ-language se access ,manage and maintain or form kiya jata hai.

-- thus toh simply apn ek bohat-sari-Information( bohat-sare-data) ko Database bol skteh hai. bs ek condition  ki voh Information Organised-way meh honi chahiyeh mtlb uss Information ko apn easily access , manage kr ske. thus toh koi bhi information/data-collection(where collection mtlb bohat-sara) Organised-Form meh hai usee apn Database bol skteh hai. thus toh database information hi hota hai but bs voh Organised-Information hoti hai.

thus toh jaise apn ese bolteh hai mereko meri company k liyeh database chahiyeh mtlb mereko meri company ki information Organised form meh chahiyeh. takki apn ess information ko easily acccess and manage kr payeh. and yeh information diff-diff tables mtlb rows and columns ki help se Organised kri jati hai mtlb yeh Information diff-diff rows and columsn meh store kari jati hai.

toh jaise har badi-badi companiyo ka apna database hota hai mtlb uss company ki jo bhi informations hoti hai jaise as like: jaise jio-company hai then uski information as customers hogi jaise customers ka name, phonenumber,voice-balance , data-balance , uske-all recharges kab-kab krayeh gayeh and many more records, thus yeh sab itni sari information ek Organised form meh banaee and rhkhi jati hai and yeh saab sara ka kaam SQ-language se hi kiya jata hai thus esiliy SQ-language bohat important hai and kafi worthy bhi hai. */

🌟##2: Types of Data Models:
/*as jaise mtlb apn koi database bana rhe hai thus toh uss database ko banane and design krne k kafi tarike ho skteh hai mtlb kafi logic ho skteh hai ki apn esse kis tarah Structure kre mtlb kis tarah banayeh. thus toh Database banane ya Database structure krne 2-tarike hoteh hai:

    1.Object based logic-model or Entity relationship model:
    (jaise mtlb apn koi bhi database banateh hai then vaha pe sbse phle apn Object-model banateh hai mtlb database meh jo entities hai unke bich meh kya-kya  relations hai ek dusre se, thus uske basis pe apn apne tables ki main heading hi banateh hai and phir apn Records fill krteh hai.) as like jaise koi college hai, thus usmeh kafi sari entities hoti hai jaise teachers, students , departments , subjects , marks , etc...etc thus toh aab students and departments meh kuch relation hoga thus toh eske basis pe ek row and columns ban jayegi , and jaise students and teachers k bich meh kuch relation hoga thus toh phir eske liyeh bhi ek row and column ban jayegi , and actually enn rows and column ka intersection point relation hi hota hai. 
    -- thus toh database design krne se phle apnko sabhi entities k bareh meh pata hona chahiyeh. and phir mtlb apn ek blue-print bana skteh hai.
    -- for more visulize krne k liyeh apn simply ER-daigram ko dekh skteh hai jismeh apnko ek kisi company k sbhi entities k bich meh relationships dekhne ko mil rha hai.

    2.Record based logic-model: (aab now jaise apna Entity-relationship model ready ho gaya thus aab apnko simply ess model meh record fill krne hoteh hai.
    aab now yeh depend krta hai apna Entity-relationhip-model kaisa bana mtlb apna entity-relationship-model mtlb it may be of three of these:
        1.Hierarhical data model (ulta tree model mtlb ess model meh ek hi root hota hai jismeh se phir multiple branches mtlb multiple childs hoteh hai. mtlb ess mofor eg: jaise koi online course hai thus voh course as root-node hoga and esse jo conneted students hai voh as a child ho jayenge and phir yeh tree bhadta hi chala jayega.)
        2.Network data model (graph model it may have multipe root and childs branches. )
        3.Relational data model (most used mtlb mostly apni blue-print relational-model hi banta mtlb tabular-model hi banta hai.)
    
*/

🌟##3: DBMS and DBMS-Operation
/*simply boleh DBMS ek system hota mtlb ek Compiler hota hai jo Database-creating language ko compile krta hai mtlb Database-lanugage ko samaj usse machine-level-instruction meh convert hai thus toh phir toh voh machine apna kaam krti hai. and now aaj kl toh DBMS graphical-interface k saat aateh hai thus toh vaha apna kaam krna thoda easy ho jata hai.

jisseh apn easy-way meh database ko create and manage kr skteh hai , mtlb jaise apnko ek database banana hai then uss database ko create and manage krne k liyeh apnko ek cheez chahiyeh hogi mtlb ek system chahiyeh hoga jiseh apn voh database ko bana and manage kr ske then voh Cheez DBMS khelati hai. 
simply boleh toh yeh DBMS graphical-user-interface software hoteh hai mtlb anpnko sirf front-end se jo kaam(jaise tables create krna and usmeh kitni rows and column create krna and phir usmeh records fill krna.) apn chahteh hai voh simply esse ho jata hai , and but acutally meh eske backend meh vohi SQ-language hoti hai jisseh yeh apne front-end k kaamo ko SQ-language se krta hai, thus toh apnko SQ-language ka itna dhyan rkhna nhi pdta.

DBMS-operations:
now mtlb apn DBMS se yeh-yeh operations machine se yeh Operation krva skta hai for creating and managing   database. are:
    1. add new files(mtlb tables)  (apn DBMS se new files bana skteh hai)
    2. insert data in existing files ( apn DBMS se unn banaee huee files/tables meh data ko inset krke store kr skteh hai)
    3. retrieve data from existing files (apn DBMS se unn files/tables meh stored data ko retrieve kr skteh hai mtlb jab chaheh tb read kr skteh hai.)
    4. Modifying the data in existing files (apn DBMS se unn files/tables meh stored data ko modify bhi kr skteh hai)
    5. Removing or deleting the data from the existing file/tables (apn DMBS se unn files meh  stored data ko remove ya deleter bhi kr skteh hai.)
    6. Removing or deleting directly the files/tables (apn DBMS se unn files ko bhi remove ya delete kr skteh hai.)
    
DBMS-Advantages and Features
    1.sharing Data across applications (mtlb jaise ek application apne data ko kisi dusre application k saat share bhi kr skti hai. as like jaise: google-apne gmail-accounts ki information dusri apps se share krti hai jaise COD-game meh in login-page etc..etc.., toh yeh opeation ya kaam apn simply apne DBMS se kr skteh hai. )
    2. Enchanced security mechanism ( mtlb apn DBMS se apne dbms se hi banaya huaa database ko Secure bhi kr skteh hai mtlb apne database pe koi orr easily nhi aa skta mtlb apne database easily koi orr bahar ka person apne database ko access nhi kr stka. )
    3. Enforce intergrity constraints:
    4.Better transaction support 
    5.Backup and recovery features (as jaise apne database meh kuch data mis-opeartionally delete ya remove ho jata hai then DBMS se apn uss data ko vapis recover bhi kr skteh hai.)
    

Relational-database:
-- simply apn ese bol skteh hai ki jis bhi database ka blueprint Relational-model banta hai uss database ko simply Relational-database bola jata hai. 
-- and ya apn ese bhi bol skteh hai ki Relational-database voh database hai jis meh data ya information Tabular form Organised hoti hai mtlb informations rows and Columns meh Organised ki jati hai. thus isiliy Relational-database meh data ya information ko access and manage krna easy mtlb aashan ho jata hai bcoz yaha ess database meh data Tabular-form meh organize hota thus mtlb har row and column and tables-tables k bich ka relation samajana easy ho jata hai and phir usmeh record access krna bhi easy ho jata hai.
RDBMS-introduction:
RDBMS(relational database management system) thus RDBMS voh system ya software hai jisseh Relational-database create and access kiyeh jateh hai. mtlb RDBMS se apn Tabular-database create kr skteh hai and krteh hai.

RDBMS-Features:
    1.every information is stored in tables only.
    2.RDBMS meh Table ki har row ki unique-ID esmeh phle se hi apne aap assign ho jati hai. 
    3. kuch special-foreign keys hoti hai jisseh Data integrity/addition ko ensure ya confirm kiya ja ske and tables ko bhi apn enn foreign-keys se identify kr skteh hai.
    4. RDBMS  SQ-language ko allow krta hai for data-access(for creating and accessing data) 
    5. RDBMS meh unique-ID ka use kreke fastly kisi bhi table ki row- k data ko retrieve kiya ja skta hai.
    6. allow data Security-feature


RDBMS-approach vs TRADITIONAL-approach
as Traditional-apporach se apn koi database create kr rhe hai then vaha pe apn simply apne khud se hi data ko organize kr rhe hoteh hai and usmeh apn simplly data ko diff-diff files meh store krteh hai. thus toh Traditional-approach for database meh data ko files meh store kiya jata hai, as like jaise apn workma k data ko diffrent folders meh store kr rhe hai ya thee . and Traditional-approach meh jo database ka model banta hai voh hierarchical-model banta hai mtlb vaha root-node ek as a main-folder hota hai and usmeh diff-diff sub-folders and files hoti hai jo as a child-node behave krteh hai.
 and RDBMS-approach for creating database meh data ko Tables meh store kiya jata hai.

TIP and NOTE: Toh aab se apnko database k liyeh hamesa hamesa DBMS-approach hi lagani hai mtlb hamesa DBMS se hi database banana hai.
*/

#NOW:
-- As jaise ek baar apna Database ban jata hai mtlb apna database create and records-filled ho jata hai then uss database ko acche se and efficiently se access and manage krne k liyeh uss Database ka Normalization kiya jata hai..
-- thus kisi bhi Database ko manage and maintain krne meh yeh sab aata hai jaise database meh addition krna files ka , deletion krna , reterieve krna and mainly Normalize krteh rhena.

🌟##4: NORMALIZATION:
/*Normalization simply ek process hai jismeh database ya database-Table meh present Complexities ko hataya jata hai mtlb enn complexities ko remove kiya jata hai takki apna database clean and complexity free hojayeh bcoz jab apna database complexities free hoga then vaha apnko kafi fayada hota hai and that mentioned below in "NEED for NORMALIZATION" .
Now aab apn kuch Complexities dekhenge jo ki kisi database meh hoti hai ya ho skti hai.
allover simply boleh toh most of the complexities Functional-Dependencies k basis pe hoti hai and thodi bohat as simple Complexities hoti hai jaise: koi ek row more than one-time repeat ho gayi ho, jaise kisi rows meh kuch mistakes ho mtlb koi record missing ho , ya kisi row ko IDs nhi di gayi ho..etc.
 
    thus toh phle apn Functional-dependencies k bareh meh dekhenge:
FUNCTIONAL-DEPENDENCIES:
-- notice: toh now abhi apan ek SQL and DBMS ki help se database banana sikh jayeh and ek database bana le phir apn yeh Functional Dependencies acche se samjenge.

Q is functionally dependent on P and T if P and T milkar ess Q ko define krteh hai toh. 
*/

-- Functional Dependency:
-- functional-dependecy ek relation hota hai jo ki functionally depends krta hai
/* jaise Result is functionally dependent on student, course, marks , grades thus ess cheez ko apn sybolically esseh bhi likh skteh hai: (student#, course# , marks# , grades# , Result) where thus this thing says that Result is a Funtionally dependent on Student , course , marks , grades. as like ese:
1. marks is functionally dependent on Student and course. so we can write like this marks , Student# , course#
2. jaise Coursename , Couser#
3. grade , marks#

as like jaise marks hai , toh voh akele subject se define hojayenge ki ess subject meh itne marks aate hai , toh nhi sirf subject se define nhi honge , then phir sirf student se yeh define hojayega ki ess student k itne marks aateh hai toh nhi bcoz ek hi student ki alag-alag subject meh alag alag marks hoteh hai. and jaise student ki date-of-birth se marks define hoteh hai kya? toh mtlb nhi , toh simply boleh marks define hoteh hai sbse phle student pe and then phir subject pe. thus toh apan ese bol skteh hai student and subject milkar marks ko define krteh hai . thus toh ess baat ko formally ese bola jata hai ki marks is functionally dependent on student and subject.

thus mtlb apn kisi cheez ko functionally dependent on ohter tb bol skteh hai jb voh sabhi other cheeze ess ek cheez ko define krti hai. 

Functional dependency 2-types ki hoti hai:
-- as now functional dependency ka dhyan apnko ess liyeh rhena chahiyeh taakki apn apne database ko acche se normalize kr ske mtlb acche se clean kr ske and phir acche se maintain kr ske.
1.Partial Functional-Dependency.
2.Transitive Dependency.

partial dependency mtlb jaise coursename , student and  courese dono pe dependent hai mtlb course name partially student pe and partiaclly course pe dependent hai.



🎷Normalization-Steps:
now jaise kabhi kisi database ka Nomalization kiya jata hai then voh Normalization step by step kiya jata hai. jaise:
    STEP-1:"1NF" ess step meh database ko 1NF( mtlb first Normal form) meh laya jata hai. and now yeh database ko 1st-Normal-form ess tarah laya jata hai mtlb essmeh database-table ko sbse phle apnko single column meh multi entities ko remove krna hota hai, kuch repeated ya duplicated rows ko remove krna hota hai, kuch errors ya missing records ko hatana and correct krna hota hai and some orr kuch erros ko sahi krna hota hai.
    thus ek baar yeh sb krne k baad apna database ya database-table 1st-NormalForm meh aa jata hai.

    STEP-2:"2NF" now ess step meh database ki 1st-NormalForm ko 2nd-NormalForm meh laya jata hai. and voh apn ess tarah krteh hai. as ess step meh database meh Partial Dependencies hataee jati hai.

    STEP-3:"3NF" ess step meh database ko 2nd-NormalForm se 3rd Noraml-Form meh laya jata hai. mtlb as ess step meh Transitive-Dependencies hataee jati hai.
    STEP-4:'4NF' ess Step meh database ki 3rd-NormalForm ko 4th-NormalForm meh kiya jata hai, and mtlb as ess step meh 
    STEP-5: and so...on mtlb database jitni high Normal-form meh hoga voh utna hi clean and complexity free hoga. jaise: 3NF 2NF se accha hota hai and as like that.

-- as now yaha pe apn ess course meh 1NF , 2NF  and 3NF ko dekhenge:

#NEED for NORMALIZATION:
-- apn mainly normalization esliy krteh hai takki apn enn niche mentioned waali cheezo ko krne se bach jayeh. bcoz yeh sab cheeze resource-wasting and time-wasting hoti hai. jaise:
    1.ek accha clear database banane k liyeh
    2.agar database clean hoga toh then DBMS-operations bhi efficiently and smoothly work krenge.
    3.to avoid any small to big DBMS-Operation as like opearation made for accessing or retrieving data as toh agr database complex huaa yeh jada time leta hai . (as toh esseh apna time bachega)
    4.to Avoid bina-faltu ki replication of information  (as esseh apna resource mtlb memory bachegi)

for-more-visualization k liyeh see the pic-2.





🌟🌟##5: SQL
/* SQL simply ek language hi hai jisseh DBMS ki help se Database create kiya jata hai:
as apn janteh hai ki DBMS ek compiler ki tarah hi hota hai jo SQL ko samaj k apni machine se voh kaam krva deta hai. and aaj kl toh DBMS graphical-interface k saat aateh hai thus toh vaha apna kaam krna thoda easy ho jata hai.

As apnne kaha ki SQL se apn Database bana skteh mtlb SQl se data-Table ko create krteh hai and phir uss Table meh data ko record-fill krteh hai , manipulate , data-ko-share and access etc..etc..krteh hai.

now yeh Sab kaam krne k liyeh apnko SQL-Syntax follow krteh SQL-Keywords ya Commands ya Querry ka use krna hota, as bcoz yeh programming hi hai thus compiler-meh phle se voh Syntax set hota hai thus voh compiler Syntax k according code ko read and samaj se accordingly manipulate krta.
thus toh phir mtlb enn sbse se hi apn Database bana pateh hai ya banateh hai.

👍SQL-Features:
now SQL user-friendly -Language hai mtlb SQL using-Users ya Customers ko bhi allow krta database meh manipulation krne k liyeh jaise: 
    1. it allow users to communicate with database mtlb ess Language  meh ese bhi feautues ya functions ki functionality hai jisseh apn User ko apne database se communicate krne de skteh hai. now where Comunicate with database mtlb database meh data ko access and manipulate krna. as:eg. jaise facebook , gmail pe id banti hai toh mtlb jb apn Id bana rhe hoteh hai toh informations apn SQ-languaage ki madad se apne database meh store krva leta hai, thus toh apn ese bhi bolteh hai ki jb user apna koi fb-account banata hai toh mtlb voh apni information fb-k-database meh store kr rha hota . thus toh SQL se apn yeh sb kaam kr skteh hai mtlb yeh sab Link-kr skteh hai thus toh voh information sidhe apne database meh jake hi store hogi.
    2. it has functionality jiseh apn apne database meh Users ko allow kr skteh hai apne database meh se data ko retrieve krne meh.
    3. it has functionality jisseh apn users ko allow kr skteh for creating, updating, modifying , deleting the data in database. mtlb jaise koi facebook-user apna account delete kr rha hai toh mtlb voh actually facebook-k-database meh se apna accoutn delete kr rha hai. as thus yeh sb kaam apn apni application ko apne database SQL-language se connect krke krva skteh hai. 

thus toh isiley SQL kafi jda popular Programming language hai for database bcoz apn apne Database k liyeh itne sare kaam easily and ek acche manner meh kr skteh hai creation and maintaince.
    
and as yeh sab kaam jaise database create krna , ussmeh files banana , record add kran , modify krna , delete krna, table ko remove krna , Nomalization krna mtlb yeh sab kaam apn SQL se kr skteh hai but bs apnko simply SQL-compiler chahiyeh mtlb DBMS or *RDBMS chahiyeh.

🎷SQL-Datatypes:
-- as SQL-meh data k according Containers allocate kiyeh jateh hai, now mtlb enn enn DataTypes k liyeh apn memoory meh memory-Container create kr skteh hai. jaise:

1.Numerica-Datatypes: 
    bit , tinyint , smallint , int , bigint , decimal , numeric , float , real.
2.Character/String-Datatypes:
    Char , Varchar , Text
3.Date/Time-Datatypes:
    Date , Time , Datetime , Timestamp , Year 
4.Miscellaneous-Datatypes:  json,XML(jaise agar apnko XML data store krna toh voh apn ess datatype se ek memory-container banake usmeh store kr skteh hai.) 

note-point: as like C , python , Javascript Datatypes SQl se bhi Datatypes hoteh hai but voh thode alag naam se hoteh hai , but mtlb toh same hi hai.

🎷SQL-Constraints:
SQl-Constraints mtlb yeh voh cheez hai jisseh apn apni Database-Table-ki-Column pe apply krteh hai and kuch ensure krteh ya krvateh hai and ya Columns pe kuch Condition set kr skteh hai ya krteh hai. and phir yeh ensure ki gayi baateh ya applied ki gayi conditions baad meh records fill krne k time obey nhi hoti toh vaha pe apnko error show hota hai and voh datas ya recored fill bhi nhi hoteh hai.
Some Constraints in SQL jo ki apn kisi bhi Column pe Apply kr skteh hai:
    1.Not Null  (Not Null se yeh ensure hota hai ki ess Column meh koi bhi Null-value nhi hogi mtlb koi bhi khali value nhi hogi.)
    2.Default (Default se particular-Column meh default value fill ya input ho jati hai jb usmeh kuch bhi kuch bhi fill nhi kiya gaya ho. )
    3.Unique (Unique = NotNull + Unique yeh ensure krta hai ki ess particular-Column meh sabhi value different hogi mtlb unique hogi. and phir baad fill krteh hai follow nhi hota jaise kisi ne koi kisi row ki same value fill krdi then vaha pe apnko error show hota hai and voh fill bhi nhi ho pata hai. )
    4.Check (Check yeh ensure krta hai ki ess particular column meh har value kisi ek Condition ko toh statisfy krti hi hai)
    5.Primary (Primary se apn database-Table ki har row ko uniquely find out kr skteh hai)
    6.Index (Index se apn database meh data ko fastly create and retrieve kr skteh hai)



*/

-- now as apnne yaha upar database , dbms and Normalization ki baat kari, as mtlb apne database acche se banane ki and manage krne ki baat kri, thus toh yeh sara kaam apn SQL se krteh hai mtlb yeh sara kaam apn SQ-Language se krteh hai. and apnko yeh bhi pata chal gaya ki database create , design and manage krne meh kya-kya steps apnko krne hoteh hai.

🌟##5:SQL-Subsets:
/*SQL-Subsets means SQ-language k bhi kuch sub-parts hoteh jaise:
    1.DDL (Data-Defining Language) mtlb data define krne k liyeh ess SQ-language ka ek alag part hota hai jisseh data-table and data-record fill hoteh hai. or ya simply boleh toh Data Define krne k liyeh alag Syntax and alag Keywords/Commands hoteh hai jo ki ess sub-part k under ya ess Sub-part meh aateh hai. thus esiliy ese ek alag language mtlb DDL language bolteh hai. 

    2.DML (Data-Manipulating Language) DM-language bhi SQ-language ka hi Sub-part hai jisseh data manipulation kiya jata hai ya data manipulation hota hai ya phir apn ese bol skteh hai ki Dm-language se apn apne database meh data manipulate krteh hai. as toh simply this means ki ya apn simply boleh toh Data Manipulate krne k liyeh alag Syntax and alag Keywords/Commands hoteh hai jo ki ess sub-part k under ya ess Sub-part meh aateh hai. thus esiliy ese ek alag language mtlb DML language bolteh hai
    
    3.DCL (Data-Control Language) DC-lanuage bhi SQ-language ka hi part hai jiseh data Control kiya jata hai and ess language se database meh permissions assign kr skteh hai and assigned-permissions-ko remove kr skteh hai.
    4.TCL (Transaction control langugage) TC-language bhi SQ-language ka hi sub-part hai and ess language se apn database meh changes ko save and restore kr skteh hai
    
toh allover apn esseh bol skteh hai ki yeh sbhi languages combinedly SQ-language khelati hai.
   
🚀As now aab apn mysql-workbench install krenge.. (for installation visit Installation_guide.)
   
💺1: DDL:
As now yaha pe apn DD-language dekhenge: mtlb apn DDL-language ka Syntax and keywords/commands dekhenge mtlb enn Keywords/commands se apn apne database meh table Defining k liyeh kya-kya kr skteh hai.
(ess Language se apn mainly database create krteh hai mtlb esmeh voh functions hai jinse apn database create kr skteh hai.)

Keywords or Commands:
    1.create  (ess command se apn database meh objects create kr skteh hai where objects mtlb table, row ,columns)
    2.Alter  (ess command se apn structure ko alter krteh hai)
    3.Drop (ess keyword/command se objects delete ho jateh hai)
    4.Truncate (ess keyword/command se database-Table meh sbhi records permanently delete ho jateh hai )
    5.Rename  (ess command se Objects ko rename kiya jata hai.)
    

1: create command/keyword..
create table table-name ( column1-name column-datatype column-record-type,
                            column2-name column-datatype column-record-type,
                            column3-name column-datatype column-record-type and so on.......  ,
                            primary key( any_column_name));

where yaha apnko ek primary key set krni hoti hai mtlb sql meh yeh apnko ek +point milta toh thus as unique_id mil jati hai sbhi rows of inputed_columns or ya apn ese bhi bol skteh hai ki primary key ek keyword-function() hai SQL meh jisseh inputed columns meh IDs apne app diff-diff define ho jati hai

tip: as now apnko yeh apni created Table ko dekhna hai then we run this querry mtlb command as SQL meh har database related Querries k liyeh respective commands hoti hai. toh simply Commands ko Querry bola diya jata  hai.

👍select-Command jisseh apn apni Created-table ka content dekh skteh hai.
                select * from table-name;  (where yaha * mtlb ess table ka sb kuch thus toh apnko puri-sari Table-Show hojayengi)

👍describe-Command jisseh apn apni created Table ka pura actual-Structure dekh skteh hai.:
                describe Table-name;

2: alter command/keyword:
alter table table_name add column column-name column-datatype;
for eg:
alter table employ_info add column added__column int;

for renaming the column-name
alter table table_name rename column column-name to new_column_name;
for eg:
    alter table employ_info rename column added__column to added__rename__column;

3.truncate command/keyword:
truncate table table-name;
for-eg:
truncate table employ_info;

4: drop command/keyword:
drop table table-name;
for eg:
drop table employ_info;

note-point: as DDL se apn sirf database-table and database-table ka Structure bana skteh hai.


💺2:DML: 
As now yaha pe apn DM-language dekhenge: mtlb apn DML-language ka Syntax and keywords/commands dekhenge mtlb enn Keywords/commands se apn apne database meh Manipulation k liyeh kya and kaise kr skteh hai.
(ess language meh voh functionlity hai jisseh apn created-database-table-columns meh data insert , update and delete kr skteh hai.)

Keywords or Commands:
    1.insert (ess command se apn data ko table meh insert kr skteh hai)
    2.update (ess command se apn table meh inserted-data ko update mtlb change kr skteh hai)
    3.delete (ess command se apn table meh inserted-data ko delete kr skteh hai)

1:insert command:
insert into table-name (column1-name , column2-name , column3-name , column4-name ) values ( value-in-respected-column1 , value-in-respected-column2 , value-in-respected-column3 , value-in-respected-column4 and so on....);

for-eg:
insert into employ_info (employ_id , employ_firstname , employ_secondname , employ_contact) values ( 1 , 'aju_kumar' , 'patel' , 78779);
insert into employ_info (employ_id , employ_firstname , employ_secondname , employ_contact) values ( 2 , 'ayan_kumar' , 'mansuri' , 57829);
insert into employ_info (employ_id , employ_firstname , employ_secondname , employ_contact) values ( 3 , 'parful_kumar' , 'kodiyatar' , 58924);
insert into employ_info (employ_id , employ_firstname , employ_secondname , employ_contact) values ( 4 , 'khemo_kumar' , 'sharma' , 13383);

2:update command:
update table-name set column-name=new--value where primary-column-setted-name=id;
for-eg:
update employ_info set employ_secondname='jangid' where employ_id=1;

3:delete command:
delete form table-name where primary-column-setted-name in (primary-columns-value , primary-column-value , and so on...);
for-eg:
delete from employ_info where employ_id in (523, 421);

note-point: as DML se apn database meh creatd tables meh data ka manipulation kr skteh hai and krteh hai. and 
(ess language meh voh functionlity hai jismeh apn User k liyeh database se linnking krteh hai takki users directly database ko access kr ske , mtlb voh kuch data database meh store kr ske.. and retrieve kr ske.)

(ess language meh voh functionlity hai jisseh apn created-database-table-columns meh data insert , update and delete kr skteh hai.)

💺3:DCL: (ess language se apn user pe permissions apply kr skteh hai ) for security purpose.....
As now yaha pe apn DC-language dekhenge: As DCl-language database-Security k purpose k liyeh hoti hai mtlb ess languague meh database-Security dedicated/related functionality hai thus toh apn DCL-language ka Syntax and keywords/commands dekhenge mtlb enn Keywords/commands se apn apne database ko kaise, kya-kya , kis tarah Secure kr skteh hai.
note: apn Security purpose meh Permissions assign and withdraw ka hi main role hota hai thus isiliy apn ess DCL Language k use meh mainlly Permission assgin/grant ya permission withdraw/revove hi hota hai.


for-eg: jaise koi banking-database hai ,toh mtlb banking meh kafi transactions hoteh hai mtlb deposits and withdrawals hoteh hai thus toh sabhi deposits and withdrwals record bank-database meh store hone chahiyeh mtlb vapis se unheh koi delete ya update na krde , thus isiley database meh permissions grant and revoke ki jati among the database-employees takki har koi database ka employ usee manipulate na kr payeh.

commands/keywords:
     1.grant (ess command se database-access krne ki permission di jati hai )
     2.revoke (ess command se database-access-krne-ki-di-gayi permission vapis se revoke kr li jati hai mtlb esseh command database ko kisi particulars users se hide bhi kiya ja skta hai.)

1.grant:
    grant columns-name(component-name) on relations-name(tables-name) to users-name
where:
    (component-name mtlb jis component k liyeh permission deni ho) 
for-eg:
2.revoke:
    revoke columns-name(component-name) on relations-name(tables-name) to users-name
for-eg:

   
💺4:TCL: 
ess language se apn database meh ho rhe ya hone wali transaction ko control krteh hai mtlb jo bhi cheeze apne database meh aa rhi hai , unn sbhi records ko apn TC-language k command/keywords se save , unsave , and unsave-point mark skteh hai.

commands/keywords:
    1.commit ( ess command se database meh jo bhi work-done huaa hai mtlb jo bhi records fill huyeeh unn sabhi records save kiya ja skta hai)
    2.rollback (ess command se jo bhi just last commit se filled-records save huyeeh hai unko vapis se delete kiya ja skta hai mtlb apna actual save krne se phle se jo database tha usee usi form meh vapis laya ja skta hai mtlb directly database ko restore kiya ja skta hai)
    3.savepoint (ess command se rollback point mark kiya ja skta hai mtlb jaise database ko filled-records ko save kr liya gaya hai thus toh vaha apan ek point mark kr skteh hai jis point yeh specify hota hai ki apan jab chaheh tb exact-vaha se rollback kr skteh hai.)
(ess language se apn pure database ka backup bana skteh hai and phir database ko restore bhi kr skteh hai.) 


 */

##6:SQL Operators:
##7:SQL functions:
##8:SQL Joins:

##9:Lab Session:





