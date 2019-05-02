//export let data ={"buttons":[41,38,-24,-13],"bars":[89,51,65,35],"limit":130};


export let data={"buttons":[41,38,-24,-13],"bars":[89,51,65,35],"limit":130};// api data

// Wrong Limit data
//export let data={"buttons":[41,38,-24,-13],"bars":[89,51,65,35],"limit":0}; //data sample with 0 limit
//export let data={"buttons":[41,38,-24,-13],"bars":[89,51,65,35],"limit":-130};// data sample with negative limit
//export let data={"buttons":[41,38,-24,-13],"bars":[89,51,65,35]}; //when limit is missing

//Wrong Bars data
//export let data={"buttons":[41,38,-24,-13],"bars":[89,51,-65,35],"limit":130}; //when bar value is negative
//export let data={"buttons":[41,38,-24,-13],"limit":130};// api data without bars

//Wrong Buttons data -- Missing buttons
//export let data={"bars":[89,51,65,35],"limit":130};// api data