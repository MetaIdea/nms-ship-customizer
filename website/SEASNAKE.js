var PART_IMAGES = [
]

var THIS_TYPE = "SEASNAKE"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "SEASNAKE"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Snake_A",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Head_1",[],[],],["TkResourceDescriptorData","_Head_2",[],[],],["TkResourceDescriptorData","_Head_3",[],[],],["TkResourceDescriptorData","_Head_4",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HWAcc_1",[],[],],["TkResourceDescriptorData","_HWAcc_NULL",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Wings_1",[],[],],["TkResourceDescriptorData","_Wings_NULL",[],[],],["TkResourceDescriptorData","_Wings_12",[],[],],["TkResourceDescriptorData","_Wings_9",[],[],],["TkResourceDescriptorData","_Wings_10",[],[],],["TkResourceDescriptorData","_Wings_11",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Body_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_B1Acc_0",[],[],],["TkResourceDescriptorData","_B1Acc_1",[],[],],["TkResourceDescriptorData","_B1Acc_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_Body_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BEelAcc_NULL",[],[],],["TkResourceDescriptorData","_BEelAcc_5",[],[],],["TkResourceDescriptorData","_BEelAcc_6",[],[],],["TkResourceDescriptorData","_BEelAcc_7",[],[],],],],],],],[],],["TkResourceDescriptorData","_Body_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BWAcc_NULL",[],[],],["TkResourceDescriptorData","_BWAcc_1",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tail_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_T1Acc_2",[],[],],["TkResourceDescriptorData","_T1Acc_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Tail_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_TailFin_3",[],[],],["TkResourceDescriptorData","_TailFin_4",[],[],],],],],],],[],],["TkResourceDescriptorData","_Tail_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_TailFin3_3",[],[],],["TkResourceDescriptorData","_TailFin3_4",[],[],],],],],],],[],],["TkResourceDescriptorData","_Tail_4",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_TWAcc_NULL",[],[],],["TkResourceDescriptorData","_TWAcc_3",[],[],],],],],],],[],],["TkResourceDescriptorData","_Tail_5",[],[],],["TkResourceDescriptorData","_Tail_6",[],[],],["TkResourceDescriptorData","_Tail_7",[],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Snake_A","_Head_1","_Head_2","_Head_3","_Head_4","_HWAcc_1","_HWAcc_NULL","_Wings_1","_Wings_NULL","_Wings_12","_Wings_9","_Wings_10","_Wings_11","_Body_1","_B1Acc_0","_B1Acc_1","_B1Acc_2","_Body_2","_BEelAcc_NULL","_BEelAcc_5","_BEelAcc_6","_BEelAcc_7","_Body_3","_BWAcc_NULL","_BWAcc_1","_Tail_1","_T1Acc_2","_T1Acc_1","_Tail_2","_TailFin_3","_TailFin_4","_Tail_3","_TailFin3_3","_TailFin3_4","_Tail_4","_TWAcc_NULL","_TWAcc_3","_Tail_5","_Tail_6","_Tail_7"]

DATA[THIS_TYPE]["TEXTURELAYERS"] = {}
DATA[THIS_TYPE]["TEXTURELAYER_SCHEMES"] = []
DATA[THIS_TYPE]["TEXTURELAYER_DEFAULT"] = []

//PALETTE, GROUP, NAME, [ONLY FOR THESE TEXTURE MODES], REMOVE DUPLICATE COLORS, SHOW ALWAYS, INTERNAL PALETTE INDEX, INTERNAL COLOR GROUP INDEX
DATA[THIS_TYPE]["COLORS"] = [[Palette_Fur,1,"Fur",[],true,true,10,0],[Palette_Scale,2,"Scale",[],true,true,10,0],[Palette_Feather,3,"Feather",[],true,true,10,0],[Palette_Underbelly,4,"Underbelly",[],true,true,10,0]],


DATA[THIS_TYPE]["LAYERING"] = function(PARTS) {
	var LAYERS = []
	for (let i = 0; i < PARTS.length; i++) { 
		LAYERS.push("" + PARTS[i].toUpperCase())
	}
	return LAYERS
}


DATA[THIS_TYPE]["INIT"] = function() {
	let TypeName = document.getElementById("type").value
	let PartsImageContainer = document.getElementById("PartsImageContainer")
	
	var PartImageSection = document.createElement("div")
	PartImageSection.id = TypeName + "PartImages"
	
	for( i=0; i < PART_IMAGES.length; i++ ) {
		var image = document.createElement("img")
		image.id = PART_IMAGES[i][0]
		image.src = "data:image/png;base64," + PART_IMAGES[i][1]
		image.style = "display: none; filter: hue-rotate(50deg) saturate(1); pointer-events: none;"
		PartImageSection.appendChild(image)
		// hidden="" style="display: none; filter: hue-rotate(50deg) saturate(1); pointer-events: none;">
	}

	PartsImageContainer.appendChild(PartImageSection)
}