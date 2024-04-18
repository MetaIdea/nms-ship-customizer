var PART_IMAGES = [
]

var THIS_TYPE = "FLYINGLIZARD"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "FLYINGLIZARD"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Head_Bird",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HBAcc_0",[],[],],["TkResourceDescriptorData","_HBAcc_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Head_Birdv2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HB1Acc_0",[],[],],["TkResourceDescriptorData","_HB1Acc_1",[],[],],["TkResourceDescriptorData","_HB1Acc_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_Head_Eagle",[],[],],["TkResourceDescriptorData","_Head_Lizard",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HLAcc_1",[],[],],["TkResourceDescriptorData","_HLAcc_2",[],[],],["TkResourceDescriptorData","_HLAcc_3",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Wings_Bird",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BWAcc_1",[],[],],["TkResourceDescriptorData","_BWAcc_0",[],[],],],],],],],[],],["TkResourceDescriptorData","_Wings_Eagle",[],[],],["TkResourceDescriptorData","_Wings_Lizard",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Body_Eagle",[],[],],["TkResourceDescriptorData","_Body_Lizard",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tail_Eagle",[],[],],["TkResourceDescriptorData","_Tail_Lizard",[],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Head_Bird","_HBAcc_0","_HBAcc_1","_Head_Birdv2","_HB1Acc_0","_HB1Acc_1","_HB1Acc_2","_Head_Eagle","_Head_Lizard","_HLAcc_1","_HLAcc_2","_HLAcc_3","_Wings_Bird","_BWAcc_1","_BWAcc_0","_Wings_Eagle","_Wings_Lizard","_Body_Eagle","_Body_Lizard","_Tail_Eagle","_Tail_Lizard"]

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