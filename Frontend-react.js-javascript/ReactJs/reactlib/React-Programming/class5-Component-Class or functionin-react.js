// NOW YAHA pe apn React-language meh Components k bareh meh dekhenge:

// 💡Main-idea-for-React💡 as React meh Component ka concept samajne se phle apn React ka main-idea dekhenge mtlb initially React-language banane ki jarurat q soch ni padi and phir usi baat se ek idea aaya ki haan apn esseh kr skteh hai takki yeh problem hat jayeh. and voh baat yeh thi ki:
// As react banane wale ko yeh cheez pata thi ki jo Functions hoteh voh block-of-code hota hai jo ki tab run hota hai jab useh call kiya jata hai tab... thus mtlb toh jaise apn webpage banane meh koi ek cheez ko baar-baar copy krne k liyeh apn uss code ko baar likteh hai ya phir usseh copy-paste krteh hai.. and apn voh kaam kr leteh hai but esseh krne se apni code-file bhaari-bhaari ho jati hai  mtlb voh ek rush sa ban jata hai mtlb apna code clean nhi hota and mostly baat hai ki vaha befaltu meh copy-paste labouring krni ho jati hai ..
// Thus esi cheez ko dhyn meh rkhteh huee yeh socha ki apn ess html-code ko kisi Function k andar likh deteh hai and phir jaise hi apn uss function ko call krenge then voh function apnko eske andar html-code return-kr degga . thus mtlb apn apne Webpage meh jab chaheh , jaha chaheh uss function ko call krke voh html-code as return-value lelenge. and uss function ko kisi kaam hone pe bhi call kr skteh hai thus mtlb uss kaam k hone voh html-code apne webpage meh lag jayega .. thus toh mtlb yeh kafi acchi cheez ho jayegi... And now aab 😄 yeh react k banne k baad yeh ho gayi hai..
// for-Tip💡:// Thus mtlb apn kisi button pe onclick set krke voh component-function call krva skteh hai... As esseh tarah hi youtube baki sari website meh yeh kaam hota hai mtlb jab user click krta hai on add-photo pe toh add photo pe click krne pr main-website pe voh html-code aa jata hai.. toh mtlb yeh ek mast cheez hai and yeh kaam apn bhi simply React-language se easily kr skteh hai..

// 🌟Imp-def:
// 🌟thuss allover React meh Component mtlb Class ya Function-jiski return html-code hoti hai. 💡notice: agr react meh apn koi Class ya Function define kr rhe hai and uski return value agr html-code nhi hai then voh Component bhi nhi hai , and apn uss function ya Class ko Component ki tarah call bhi nhi kr skteh.🌟

// Thus esi function(jiski return-value html hoti hai) ko hi React meh simply "Component" bolteh hai.


// Now yeh Component 2-types k hoteh hai.
// 1.Function-Component
// 2.Class-Component 
// 💡Tip: as Class-Component hi hamesa higher-priority pe hota hai. as bcoz mtlb ki Class-Component meh phle kisi-aur Class ko ess current meh inherit krva skteh hai takki uss Parent-class k sare functions and key-value-pairs apni ess current-Class meh aajayeh and apn phir enka aaram se use kr sake , secondly ki apn   Construction-fn ko define krke inputs(arguments) le sake and voh inputs Parent-class ko pass kr skteh hai. thus mainly enn 2-reasons k liyeh hi apn hamesa mostly Class-Component ka use hi krteh hai , but agr apnko shortly koi chota sa html-code apne webpage pe fetch krvana hai then vaha apn simply and directly Function-Component use kr skteh hai.

// thus now apn Class-Component ess tarah banteh hai:
// 📓note-point: as Component-name(identifier) ka first-letter hamesa Capital hota hai , thus first-letter capital(upper-case) hona chahiyeh.

class Component1 extends React.Component{
// as apn Class-Component ko "React.Component"-Class se extend krteh hai mtlb ess "React.Component"-Class ko current-Class ko as a inherit meh provide krvateh hai bcoz yahi toh Class-Component banane ka main-moto hai otherwise toh apn simply Function-Component hi bana leteh. 
/* some-important-Points related to "React.Component"-Class:
    1.render()-fn (as ess Class meh ek render()-fn hota hai jo jab esski child-Class ko call kiya jata hai tab yeh bhi run hota hai and ess functions ki return-value html-code hi rkhi jati hai takki tab bhi class call ho toh tab yeh render()-fn bhi call hojayeh and eski return-value vaha uss class-calling ki jagah aajayeh.thus toh apnko render()-fn use krna hi krna hota hai. as bcoz kisi Class ko call krna mtlb uske Constructor ko call krna thus phle uska Constructor()-fn call hoke voh execute hota hai and apna kaam krta hai and then yeh render()-fn call hota hai and phir eski jo return value hoti hai voh uss class-calling ki jagah aa jati hai. thus mtlb react meh mast cheez hai ki Class-Component ko call krne pr Class ki tarah uska Constructor-fn hi run hota hai , as Constructor-fn k saat aur 4-functions one by one call hoteh hai agr voh present hoteh hai tab otherwise nhi hote but render()-fn toh must hai and yeh define krna hi hota hai bcoz allover uss Component- ki return-value honi hi chahiyeh tabbhi toh jo main-moto hai voh pura hoga. as main-moto ko html-return krvana hai. but Class-Component se voh html acche se edit hoke aa jata hai. )
    2.as ess Class meh ek Props-naam se ek key hoti hai.
    3.as ess Class meh ek state-naam se ek key hoti hai.
    4.as ess Class meh ek context-naam se ek key hoti hai. mtlb ess "React.Component"-class K Object meh yeh 3-hi keys hai.


 */

    render(){
        return <div id="divi">
            <h1>hi bro kaise ho all fine hai na</h1>
        </div>
    }

}
// 🌟 AS Component (any Component Class-component or Function-Component) ko call ess tarah kiya jata hai:
//          < Componetent_name />
ReactDOM.render( <Component1 /> , document.getElementById("rooti"))
// as toh Jab bhi apn ess "Component1"-class ko call krenge then yeh eska render()-fn bhi surely call hota hai and apnko html-code milega mtlb yeh div with "divi" wala code milega.
// as yeh toh ek simply sa Class-Component tha as bcoz q ki apnne essmeh koi Constructor-fn and super()-fn ko call nhi kiya and koi kuch key-value bhi assign krke apne render()-fn k html-code meh use nhi kiya . thus yeh esa Component ki jagah apn Function-Component bhi use kr skteh hai mtlb bana skteh hai. as like this.

function Component11(){
    return <div id="divi">
        <h1>awesome bro awesome </h1>
    </div>
}
// as yeh bhi ek Component hai mtlb Function-Component hai. and esko bhi apn call krke use kr skteh hai as like this:
ReactDOM.render( <Component11 /> , document.getElementById("rooti"))



// Component-Constructor()-fn:
// Now aab apn apne Class-Component meh Class ka Constructor()-fn bhi define krenge. as essihi fn meh apn Class-Object define krteh hai mtlb Class-Object ki properties(mltb key-value-pairs) define mtlb initialize and assign krteh hai.
// 📓notepoint: as Class ka jo bhi Object-bana hai jo apn "React.Component"-Parent-Class k state-key meh define krteh hai and essi meh define krna hota hai bcoz voh apn aage dekhenge: mtlb apn apni khud ki keys bhi bana skteh hai .

// as super()-fn toh parent-Constructor()-fn ko denote krta hai.

class Component1_with_constructorfn extends React.Component {
    constructor() {
        super()
        // as super()-fn ko apn esliyh call kr rhe hai bcoz jab apn child-class k khud ka constructor()-fn define kr dete hai then class-calling time pe child-class ka constructor-fn hi call hota hai mtlb  parent-class ka constructor-fn call nhi hota hai thus toh mtlb apnko phir parent-class ki key-value-pairs nhi milpayenge , then eskliy apn phir super()-fn ka use krke parent-class k constructor-fn ko bhi call kr leteh hai.

        this.key1 = "key1_value1"
        this.key2 = "key2_value2"
        this.state = {
            statekey1: "statekey1_value1",
            statekey2: "statekey2_value2",
            statekey3: "statekey3_value3"
        }
        this.props = {
            propskey1: "propskey1_value1",
        }
    }

    render() {
        // 💡: As now aab apn ess upar defined keys ko yaha apne html-code meh use kr skteh hai and actual meh yahi toh Class-Component banane ka phayada hai. mtlb essih cheez k liyeh apn yeh Class-Component banteh hai.
        return <h2> the value of key1 is =  {this.key1} and value of state's statekey1 is = {this.state.statekey1} and state's statekey2 is = {this.state.statekey2} and <Component1 /> value of props = {this.props.propskey1} hi </h2>
    }
}
ReactDOM.render(<Component1_with_constructorfn />, document.getElementById("demoi"))


// 🌟: Props
// as Props ka concept class6-meh dekh rahe hai.


// 🌟 Using-Component in Component: 
// as apn kisi bhi Component ko kisi bhi function ya html-code meh call kr skteh hai , and thus vaha uss component-calling pe uss component- k render()-fn ki return value aajati hai. as apnko bas itna dhyan rkhna hai jis "Component" ko apn call kr rhe hai voh Component kaha defined hai;
// as Component 2-jagah define ho skta hai:
// 1.in the currentsame-file ( as mtlb voh "Component" same usi file(jis file meh voh call ho raha hai) meh hai , then uss component ko apn simply bas call krke use kr skteh hai.) as like this:
class Component1_with_constructorfn extends React.Component {
    render() {
        return <div> <h1>hey bro awesome: </h1>
    <Component1 />
            
            </div> 

         
    }
}
// 2.in any-Other-file ( As agr voh Component kisi other-file meh hai and apn usko kisi or othere file meh call and use krna chahehteh hai then phle apnkko uss "Component" ko export krna hoga as like as jaise apn module-file k functions , Objects , variables ko export krteh hai by using module.exports-keyword as same-way meh apn "Component" ko bhi kisi other file meh use krne k liyeh bhi uss Component ko export krteh hai takki unn Component ko apn kisi other file meh simply import krke phir usko easily call krke use kr sake.)
// 1. AS React meh Component ko ess tarah se export kiya jata hai. 
//          export default component-name
// 2. and phir ess tarah uss exported-Component ko ess tarah import kiya jata hai.
//          import component-name from "./file-name-in-which-this-component-is-present"
// 3.and ek baar import krne k baad apn simply uss Component ko kabhi bhi kaha bhi call kr skteh hai.
//          < Component-name />

// 💡Tip-point:As Mostly apn diff-diff files k Components kisi ek mtlb index.js-file meh import krke use krteh hai. and yeh ek acchi cheez bhi hai q ki apn website- meh different cheezo k diff-diff component alag-alag file bana leteh hai, thus toh apnko samaj bhi rheti hai ki apn kya kr rhe and konsi cheeze kaha pr hai. thus toh apn diff-diff Components ko diff-diff files meh banteh hai. and phir unheh export krke jis file meh use krna chaheh uss file meh import krke use kr skteh hai. and esseh krne se apni Website ek clean-way meh banti hai.

// As NOW comp1.js-file k component ko yaha apni ess current-file meh use krenge thus toh eske liy apnko phle ess file ke component ko uss file meh export krna hoga and then apni ess file meh import krna hoga thus then apn ess component ko call krke use kr skteh hai.

// import Componentii1 from "./comp1.js"
// 📓note-point: as apnko files ko import sbse phle upar-hi-upar krna hota hai.
ReactDOM.render(<Componentii1 />, document.getElementById("div3"))











// 🔥 React-part: 🔥 so paste this it in react-Comoponent-PART::
// React-function ko hi simply react meh component-function ya only component bolteh hai..
// Thus component mtlb Function ya class hi.
// as enn Component-function ya Component-Class ki return value ek parent-html-element hi hota hai... 
// As bcoz react meh yeh class and Function esiliy hi hoteh hai.m
// Thus mtlb jab bhi apn component ko call krenge and voh component ki retrun value uske render-function ki "return-value" hogi..

// as Function-component bhi bana skteh hai and useh call kr skteh hai but voh class-component jitna accha nhi hoga

// as toh allover react meh Function and class ko Component hi bolteh as Component naam ess baat pe diya gaya hai ki voh Function ya Class html-code return krteh hai..
// Thus react meh jo bhi function ya class html-return krteh hai unheh simply Component bolteh hai and as react-code meh mostly yeh Function and class hoteh hai jo ki html hi return krteh hai..

// As class-component k constructor-fn meh jo bhi keys- apn banateh hai voh sab apnko state-namak object meh define krni hoti hai... As bcoz baki sari functionality essi state-object ko lekar defined hai..
// As yeh state-key actully uss react.component-class ki hai.
