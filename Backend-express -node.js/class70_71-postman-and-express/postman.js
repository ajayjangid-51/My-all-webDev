// YAHA pe apan "POSTMAN" and "EXPRESS" k bareh meh dekhenge:

// POSTMAN:
// simply POSTMAN ek aap hai jis meh apan website meh website-server se ki jane wali koi bhi post and get request ko search(or send) krteh hai and phir in the result apanko only uss request ka uske-server k duvra jo response set kiya hota hai only voh milta hai. apan ess app meh simply client-request ka jo url(mtlb pura link daal ke jaise www.facebook.com/home/khemo/comment) hota hai usse search box meh daalte and phir send krteh hai and phir jo result shown hoga voh particularly sirf ess requests ka response hi show hoga mtlb vaha pe koi uski puri website show nhi hogi. simply boleh toh jo website-server pe req.url k res.end() meh jo set kiya gaya hai sirf vahi show hoga.

// now aab apan API k bareh meh dekhenge:
//    API(application program interface) mtlb application ka voh program jo as a interface kaam krta ho mtlb application pe requests ko handle krta ho thus API simply esliy banaee jati hai takki jo APPLICATION pe aani wali sabhi tarah ki request ko handle mtlb unko accept and respond kr ske and yahi API ka kaam hota hai.
// thus toh mtlb apn ase bol skteh hai ki jo kisi bhi application ki API hoti hai voh sirf or sirf website pe aani wali requests ko accept and unko respond krne ka kaam krta hai means API-program meh req.url and its res.end() hi written hota hai. thus postman apnko direclty kisi bhi application k API meh jo req.url ka res.end() set hai voh dikha deta hai.
// (as eg. ki jaise dog.ceo ek API hai mtlb jo ess website k server pe API jo likhi huee hai(mtlb req.url and res.end() hota hai) voh same yahi ess website pe mention ya shown hai isiley apan ess dog.ceo website ko directly API bhi bol dete hai)
// (as eg. ki jaise dog.ceo ek API hai mtlb jo ess website k server pe API jo likhi huee hai(mtlb req.url and res.end() hota hai) voh same yahi ess website pe mention ya shown hai isiley apan ess dog.ceo website ko directly API bhi bol dete hai)

// TIP:
// thus most of time apan "postman" meh websites ki API ki post and get request ka response dekhte hai (bcoz apnko pta hai website-API uss website ki interface hai mtlb jo bhi intraction(kisi client se ya kisi other website) krna hota hai voh API hi handle krta hai(and yaha pe intraction in the form of requests and respond hota hai. thus mtlb kabhi koi aur website ess website se intract krna chahegi voh acctually ess website-ki-API se intract kregi.), bcoz ki apan apane software ko as according to that response design and write kr ske. (as eg. jaise cod website apne server pe account create krne k liyeh facebook-account ko bhi accept krti hai and jaise yatra.com website multiple aeroplane  )

// and agar POSTMAN nhi hota toh apanko ess kaam k liyeh phle program likhna hota jo ki apanko resquest's ka response fetch kr k deti ho.

// EXPRESS:
// express is web-application framework mtlb web-application ko dhacha dena ka kaam apan esse easily kr skteh hai
// express k apan easily and fastly backend applications banateh hai