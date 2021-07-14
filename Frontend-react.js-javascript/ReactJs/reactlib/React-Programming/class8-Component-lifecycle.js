// Now YAHA pe apn Component ki LifeCycle k bareh meh dekhenge:
// as Component ki 3-main stages hoti hai.
//  1.mounting of Component  (fetching in the Webpage)
//  2.Updation of Component
//  3.Unmounting of Component

// Now Component ki enn States k according Component-ki LifeCycle hoti hai:
//  1.Mounting of Component : as mtlb jab Component Webpage pe Mount hota hai mtlb Mount hone k liyeh call hota hai then vaha uss Component-class k 4-main functions one by one call hoteh hai.
//  


// React-component-lifecycle:
/* As react meh jab bhi apn kisi bhi react-component ko call  (as this: < Componet/> )  krteh hai, then vaha pe uss Component ki yeh 4-cheeze one-by-one call hoti hai:

1. Sbse phle Component ka Construction-fn call hota hai.
2.getDerivedStateFromProps()
3. As phir render()-fn call hota hai and eski jo return value hoti hai voh uss Component ki jagah aa jati hai. As mtlb Component ki return value uske render()-fn ki return value hi hoti hai, as bcoz jab bhi koi Component call hota hai then by-default react meh yeh Component ka render()-fn call hota hai..and uski return value ess Component li return value ho jati hai. As isiliy yeh render()-fn required hai, 
4. And atlast meh ComponentDidMount wala()-fn call hota hai.. */

// As render()-fn k alava Functions optional hai mtlb apn unheh define kr bhi skteh hai and nhi bhi krteh tab voh Functions skip hojayenge