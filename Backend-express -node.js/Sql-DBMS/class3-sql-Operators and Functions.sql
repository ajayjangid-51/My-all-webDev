🚀 NOW YAHA pe SQL meh Operators or Clauses k bareh meh dekhenge:

👍1:WHERE Operator or Clause:
-- as jaise apn ek baar apna database bana ke phir uss database ko console meh fetch krvateh hai ya simply show krvateh hai then vaha pe apn vaha pe ess WHERE-clause ki madad se vaha condition laga skteh hai thus toh phir apnko uss condition ko follow krne wale records hi show hoteh hai..
/*As simply boleh toh apn WHERE-operator se koi condition laga skteh hai 
as jaise apnko apna database dekhna hai pr koi particular column ya koi particular data dekhna hai jaise salary-column dekhna hai but usmeh bhi greater-than 3000 wale inputs hi dekhne hai then vaha pe simply ess WHERE-Operator ka use kr skteh hai*/

-- and apn ess WHERE-operator ko select , update ,delete -commands meh use krteh hai.

-- syntax:
--      select * form table-name where column-name=column-value;

select * from employ_info where employ_id=42;
-- this means ki muje employ_info-named-table dekhni hai jaha employ_id-column  ki value 42 hai.
select * from employ_info where employ_id<3;
select * from employ_info where employ_id<=3;
select * from employ_info where employ_id>3;
select * from employ_info where employ_id>=3;
select * from employ_info where employ_secondname='kodiyatar';

👍2:Logical-Operators:
/*  1.and (as apn janteh hi hai ki jiase jispe yeh AND-operator laga hai voh operands dono hi true toh hi eski value true hogi otherwise phir eski value false hogi.) 
    2.or (as agr koi ek operand ki value true hogi then tab simply eski value bhi true hojayegi)
    3.not(!) (as yeh operator negative kr deta hai.) */

-- for-eg:
select * from employ_info where employ_secondname='kodiyatar' and employ_id=32;
-- this means ek select kro employ_info-named-Table meh se jaha employ_secondname-column ki value 'kodiyatar' ho and employ_id ki value 32 ho.
-- thus apne database meh yeh table hogi and usmeh columns ki value yeh hogi then voh values apnko mil jayegi otherwise apnko simply null show hoga.

select * from employ_info where employ_secondname='kodiyatar' or employ_id=32;
select * from employ_info where employ_secondname='kodiyatar' or employ_id>10;
-- as toh apnko voh sb rows mtlb values milegi jiski employ_secondname = kodiyatar hai or saat hi meh voh bhi values milegi jo ki employ_id>10 hai..

select * from employ_info where employ_secondname='kodiyatar' and employ_id=32;
-- as yaha not ka koi sense nhi hai..

select * from employ_info where not employ_secondname='kodiyatar';

👍3:Comparison-Operators:
/*     1.= (equal to operator)
       2.> (greater than operator)
       3.< (smaller than operator)
       4.<= (smaller than or equal to operator)
       5.>= (greter than or equal to opeator)
       6. <> or !  (not-equal to opeators)
*/

👍4:Special-Opereators: (dedicated to only table-columns)
/*  1.between (yeh operator ek given range meh aane-wali values ko database ya database-table meh check krega mtlb find-out krega and return meh voh range meh aane wali finded values kr dega.) note-point: yaha esmeh lower-limit and upper-limit bhi inclusive hai mtlb included mtlb yeh as like close-square-bracket[] ki tarah hi hai.
    2.like (yeh operator given string ko database meh check krta hai and database meh koi string agr esse match hoti hai toh yeh unn values-row ko return kr deta hai.  ) simply mtlb ki database meh esmeh inputed-String se jo bhi string match kregi toh yeh operator uss matched-string ko return kr dega.
    3.is null (yeh operator columns meh null-values assinged ko check krta hai mtlb null-values ko find out krta hai and vohi values return krta hai)
    4.in  (yeh operator database-table meh given ya provided values-list k equal values check krta hai mtlb find-out krta hai and in the return voh values jo exactly-match hoti hai unheh return kr deta hai 
    5.distinct (ess operator se apn koi puri-ki-puri particular-column k all distinct values ko show krva skteh hai.)

1: select * from table-name where column-name between from-range and upto-range;
select * from employ_info where employ_id between 20 and 100;

2: 
select * from employ_info where employ_firstname like 'parful_kumar' or 'ayan_kumar'; (as syntax toh galat pr apnne "or-operator" use kr liya hai esliy)
select * from employ_info where employ_firstname like 'parful_kumar' and 'ayan_kumar'; (it will show error bcoz yeh syntax hi galat hai)

select * from employ_info where employ_secondname like 'mansuri';

select * from employ_info where employ_secondname like 'm%';
where as toh apnne yaha pe "%-symbol" ka use kiya thus as it satisfies ki eske aage kuch bhi-character ho skteh hai. thus toh es command se apnko m se start hone wale employ_secondname ki values mil jayegi.


3. select * from employ_info where employ_secondname is null;



4. select * from employ_info where employ_id in ( 2, 4 , 1001);


5: slect distinct(column-name) from table-name;
  select distinct(employ_firstname) from employ_info;

*/

🚀SQL-FUNCTIONS:
👍5:Aggregation Operators or Functions: (Column dedicated functions)
/*  1.avg() (yeh function inputed column ki average value deta hai)
    2.count( yeh function table ki rows count krta hai and in the return yeh counted no.of rows deta hai)
    3.max() (yeh function inputed column ki largest/maximum value return krta hai)
    4.min() (yeh function inputed column ki smallest/minimum value return krta hai)
    5.sum() (yeh function iputed column ka sum return krta hai.)

🎱Syntax with Examples:
1: select avg(column-name) from table-name;
eg:
 select avg(employ_id) from employ_info;
2: select count(column-name) from table-name;
eg:
select count(employ_firstname) from employ_info;
select count(*) from employ_info;
3: select min(column-name) from table-name
eg:
select min(employ_id) from employ_info;
4: select maxcolumn-name) from table-name
eg:
select max(employ_id) from employ_info;
select max(employ_salary) from employ_info;  (thus toh esseh apnko maximun salarty mil jayegi.)
5: select sum(column-name) from table-name
eg:
select sum(employ_contact) from employ_info;
select sum(employ_id) from employ_info;
    */

👍6:GROUP BY Clause ya Operator:
-- group by clause se apn ek virtual-group bana skteh hai and uss group meh phir coommand apply kr skteh hai;
-- jaise apnko employ-id ki max value chahiyeh but yeh max-value apnko ek group meh ki max-value chahiyeh mtlb pure column ki max value nhi chahiyeh, like jaise apnko jinki salary 20000 hai unmeh employ_id ki max-value chahiyeh , and as many apn bohat sare virtual-grouping kr ke data ko sort-out kr skteh hai by "group by"-operator se:
-- esseh apn indentical data ko ek group meh daal skteh hai

-- thus toh jab bhi apnko group related data jan na hota hai then vaha pe apn simply "group by"-operator ka use krteh hai
-- for-eg: jinki dept_id 12 hai unmeh max-salary kis hai, thus mtlb esse group-wise agr apno kabhi data fetch krna hai then vaha pe apn simply group by -operator ka use krteh hai.

alter table employ_info add column dept_id int;
update employ_info set dept_id=31 where employ_id=1;
select max(employ_id) , employ_secondname  from employ_info group by employ_secondname ;
-- thus esseh apnko ess column ki same value wali cheeze hi milegi.
-- thus esseh apnko ess group by employ_secondname k according values milegi jaise apnne bola ki max(employ_id) thus ess value-wale ki ids meh jiski max-ID hogi voh show hogi as like that.
-- mtlb apnko group by wali group ki values show hogi mtlb jaise apnne max-value show krvaee haii toh mtlb voh group ki same value meh max value show krega..
update employ_info set dept_id=32 where employ_id=41;

-- where group voh group banega jinki column value same ho. jaise dept_if column meh values like: 
--      2,4,5,12,5,2,52,5,7,8,6,7,2,52,7
-- thus toh yaha pe 2,2,2,2 ki value same hai isiliy enka group-create hojayega thus toh phir ess bane huee group k according show hoga.

-- mtlb ess group meh average salary mtlb jinka deparment_id same unn unki avg_salary

👍7:Having Clause ya Operator:
/* As simply Having operator bhi as like Where-operator ki tarah hi "conditions" apply krne k liyeh use hota hai.
Having operator mainly Aggretation-Functions, Group by-function and Order by-functions k liyeh use kiya jata hai as alpn having-operator ka use krke enn aggretaion-functions ko vary kr skteh , group-by function meh jo group banteh unko bhi apn change kr skteh hai by simply applying condition and order by meh order banta hai usseh bhi apn vary kr skteh as per applying condtion bcoz jaise apnko aggretation-function,group by , order by functions meh koi condition lagani ho then voh apn Where-operator se nhi laga skteh , isiliy Having-operator hota hai thus toh apn simply "having"-operator ka use krteh hai.

-- NOTE-point: as toh jaise kabhi apn "having-operator" ka use "group-by" or "order by"-operator k saat use krteh hai then vaha pe apnko hamesa Having-operator ko group by-operator k baad meh use krna hota hai and order-by-operator k phle use krna hota hai.

for-eg:
        select avg(employ_id), dept_id from employ_info group by dept_id having count(dept_id)>=5 ;
-- thus toh yaha pe aab group banega voh ess condition k according banega mtlb greater than 5 id wali-values ka hi group banega.
*/



👍8:order by operator:
/*Order by-Operator se apn database ki fetching ko Ordered-way kr skteh hai mtlb apn apne database k data ko ek Ordered-way jaise ascending-order or descending-order meh fetch kr skteh hai. and yeh fetching-order with respect to column hota hai: jaise

syntax: mtlb thus toh jb bhi apnko apne database ko kisi column k respect meh order-wise fetch krna hai then voh apn ess tarah krteh hai: jaise:
//        select * from table-name order by column-name desc/asc; 
//   where yaha pe "desc" is for descending-order and "asc" for ascending-order.

for-eg:
-- select * from employ_info order by employ_id desc; (thus toh esseh apnko data fetch hoga in descending order  of employ_id-column)
-- select * from employ_info order by employ_contact asc;  (thus toh esseh apnko data fetch hoga in ascending order of employ_contact-column)

*/

👍9:UNION Operator:
/* ess operator se apn two ya more than two column ko union kr skteh hai mtlb combine kr skteh hai where vaha koi duplicate values bhi nhi hogi, as toh simply boleh toh apnko tables ka union milega.
-- note-POint: jin bhi columns ko apn union/unite kr rhe hai unn columns ka datatype-same hona chahiyeh and voh given no-of-column same and similar-order meh likhe hone chahiyeh hai.

syntax:
select columns-names(using ",") from table-name union select columns-names(using ",") from table-name;
for-eg:
select product_name from product1 union select product_name from product2;
*/

👍10:UNION ALL Operator:
/*union and union all operator actually same bhi hai but bas yeh union all duplcates values bhi return krta hai.and bakki sab functinality same hi hai..*/

:11:intersect Operator
/*yeh operator apnko combine ki gyi columns ka intersection dega mtlb unki comman-values return karega..*/









-- 🍔note and tip: Simply apnko yeh maan na hai ki database meh rows hoti hi nhi hai, as simply sirf columns hoti hai and unmeh Columns ki values hoti hai.

-- 🚀note-point: SQL bhi whitespace-free language hai mtlb SQL meh bhi as like C,JAVASCRIPT,PYTHON,JAVA ki tarah as much as no. of whitespaces matter nhi krteh hai.


-- jaise database ka data fetch krwane k liyeh apn yeh syntax use hota hai:1

-- //       select __blank1__ from  __blank__  where/having __blank3__;

-- where blank1 meh jo apnko print ya show krvana hai voh aata hai.
--       blank2 meh jo jiska data print ya show krvana hai voh aata hai.
--       blank3 meh conditions input ki jati hai ya aati hai.
--  //    select column-name , column-names.. from table-name , table-names...  applied-condtion, appplied-conditions....   ;