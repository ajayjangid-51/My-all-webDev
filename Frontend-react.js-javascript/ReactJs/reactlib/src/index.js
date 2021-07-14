import React from 'react';
import ReactDOM from 'react-dom';
// import Componentii1 from "./comp1.js"


// class Component1 extends React.Component {

//     render() {
//         return <div id="divi">
//             <h1>hi bro kaise ho all fine hai na awesome tha yr</h1>
//         </div>
//     }

// }
// ReactDOM.render(<Component1 />, document.getElementById("rooti"))
// function Component11() {
//     return <div id="divi">
//         <h1>awesome bro awesome </h1>
//     </div>
// }
// ReactDOM.render(<Component11 />, document.getElementById("demoi"))

// 🌟: Props
// as Props ka concept class6-meh dekh rahe hai.
// Props simply Class-Component ya function-Component k parameters hi hoteh hai. mtlb react meh Component-k-parameters ko Props bolteh hai. and eske piche ek reason bhi hai and that reason is ki jo React.Component-naam se Parent-class-Component hota hai usmeh ek props-naam se ek key hai. thus toh component- ko call krteh-time apn jo inputs uss component meh pass krteh hai voh sab agruments directly ess props-namak-key meh hi jake assign hoteh hai mtlb yeh react meh by-default hi hota hai mtlb by-default set hai.

// as Component meh parameters mtlb props ess tarah input-pass kiyeh jateh hai.
//      < componentname propsObjectkeyname = "value" ,  propsObjectkeyname = "value" />
// yeh as same hai jaise apn html-element meh uske attributes pass krteh hai. as like jaise:
//      <h1 onclick= "fn-name"  />

// AS Now Component meh yeh passed-inputs ess Component-ki props-key-Object ki keys meh jake assign hoteh hai.

// 📓note-point: as agr Component meh props-key-Object meh keys defined hai then vaha uss component ko call krteh time apn voh props mtlb parameters pass krvva bhi skteh hai or nhi krvateh toh bhi apnko koi error bhi milta. until and unless apnne contructor-fn meh voh props nhi maange tab tk.

// and Component meh props-key-Object meh keys ess tarah defined ki jati hai:
//          this.props.key_name
// and then phir component ko call krteh time apn ess tarah ess props-keyObject ki keys ki value ess tarah pass krteh hai: 
//          < componentname propskeyObject_keyname = "key_value" />    

// 🌟 Creating a Component which has defined props-keyObject's keys mtlb Creating a component which has which has a pseudo-value mltb means it has a parameters. and yeh paramters component ko call krteh time input-pass kiya jateh hai.
// 
class ComponentwithPropsmtlbparameters extends React.Component{
    // constructor(props){
    //     super(props)
    //     // this.key1 = this.props.propkey1
    //     this.props.propkey1
    // }
    render(){
        return <div id="divis">
            {/* <h1>hello brother what's up the value of key1 is {this.key1}</h1> */}
            <h1>hello brother what's up the value of key1 is {this.props.propkey1}</h1>
            <h1>hello brother what's up the value of key1 is {this.props.propkey2}</h1>
        </div>
    }
}


// or apn esseh bhi kr skteh hai:
let var1 =  <ComponentwithPropsmtlbparameters propkey1 = "propkey1_valueis_1" />
ReactDOM.render(var1 , document.getElementById("demoi"))
// as bcoz ki variables toh hamesa apni assign value hi point kr krteh hai. ya apn esseh bhi bol skteh hai ki jab yeh variable-compilation k time acces hoteh hai toh vaha yeh enn varibles ko enki return value se replace ho jateh hai mtlb replace kr diyeh jateh hai.

// and now jaise agr apn props-keys ki value meh kisi variable ki value assign krvana chaheteh hai. then toh mtlb apnko voh variable curly-braces meh likhna hoga as bcoz variable use krna mtlb javascript-use krna thus toh html-code meh apn javascript easily use kr skteh hai but voh javascript-code apnko curly-braces meh likhna hota hai. as like this;
let valueofpropskey1 = "hiim_propskey1_valuemmmm1" 
let var11 =  <ComponentwithPropsmtlbparameters propkey1 = {valueofpropskey1} />
ReactDOM.render(var11 , document.getElementById("demoi"))


// 📓🔔: AS now aab jaise agr props-key ek Object defined ho jata hai mtlb props-key more than 1 keys-define ho jateh hai , then phir ess tarah : component ko call krteh time voh prop-keyObject ki keys input nhi kr payenge:
/*
ReactDOM.render( <ComponentwithPropsmtlbparameters propkey1 = "propkey1_valueis_1" propkey1.ki = "hi" /> , document.getElementById("demoi")) 
 */
// as yeh syntax react meh supported nhi hai. mtlb simply yeh galat hai , react meh apn ess tarah paramter-Object ko input nhi kr skteh hai.
// Thus toh esseh krne k liyeh apnko phle ek Object-banana hota hai. and then uss Object-container ko component ko call krteh time input dena hota hai. as like this:

// Creating a component which has props-key as a Object means that props-key has multiple keys init.
class Componentwithmultiplepropskeys extends React.Component{
    render(){
        return <div className="divs">
            <h1>hey bro that is so awesome</h1>
            <h3>the value of props-Object key1-object's key1 is =  {this.props.key1.baby1key1} </h3>
            <hr/>
            <h3>the value of props-Object key1-object's key2 is =  {this.props.key1.baby1key2} </h3>
            <hr/>
            <h3>the value of props-Object key2-object's key1 is =  {this.props.key2.baby2key1} </h3>
            <hr/>
            <h3>the value of props-Object key2-object's key2 is =  {this.props.key2.baby2key2} </h3>
            <hr/>
            <h3>the value of props-Object key3 is =  {this.props.key3} </h3>
            <hr/>

        </div>
    }
}

// ReactDOM.render(<Componentwithmultiplepropskeys key3 = "key3 = key_value3" /> , document.getElementById("divi5"))

let var_key1 = {
    baby1key1: "key1_baby1key is 11",
    baby1key2: "key1_baby1key is 11"
}
let var_key2 = {
    baby2key1: " 👍 👶1 ",
    baby2key2: " 👶2 ",
    baby2key31: " 👶2 "
    // as ess baby2key31 se koi erro nhi aayega bcoz compiler sirf component meh defined value- naam wali value hi lega.
}
ReactDOM.render(<Componentwithmultiplepropskeys key1 = {var_key1} key2={var_key2} key3 = "key3 = key_value3" /> , document.getElementById("divi5"))



// Props in Constructor()-fn:
// Simply AS jaise agr apne Component meh Constructor-fn hai then apnko component-parametes phle apne ess consturctor()-fn meh lene honge and then yeh parameters apn super()-class ko input mtlb pass krva skteh hai and apn super-class ko props-meter pass krvateh hi hai. bcoz tabhi apne Component meh inputed values ess props-key meh japayegi.

// note-point agr apn ess props ki jagah koi orr name use kare toh apnko error milega. as like this:

class C1_component extends React.Component{
    constructor(  p2 , p3 , p4){
        // super(props);
        super(p2)
        this.key1 = p2
        this.key2 = p3
        // this.key1.a = p4
        this.key4 = p4

    }
    render(){
        return <div id="divi">
            <h1>hello my key1 value is {this.key1} </h1>
            <h1>hello my key2 value is {this.key2} </h1>
        </div>
    }
}
ReactDOM.render( <C1_component p2 = "good" p3 = "super" p4 = "duper" /> , document.getElementById("divi6"))












