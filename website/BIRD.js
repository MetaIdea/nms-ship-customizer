var PART_IMAGES = [
]

var THIS_TYPE = "BIRD"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "BIRD"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Head_Bat",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HBat_0",[],[],],["TkResourceDescriptorData","_HBat_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Head_Bird",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HBAcc_1",[],[],],["TkResourceDescriptorData","_HBAcc_2",[],[],],["TkResourceDescriptorData","_HBAcc_3",[],[],],["TkResourceDescriptorData","_HBAcc_4",[],[],],["TkResourceDescriptorData","_HBAcc_5",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Wings_1",[],[],],["TkResourceDescriptorData","_Wings_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_W2Acc_0",[],[],],["TkResourceDescriptorData","_W2Acc_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Wings_3",[],[],],["TkResourceDescriptorData","_Wings_4",[],[],],["TkResourceDescriptorData","_Wings_5",[],[],],["TkResourceDescriptorData","_Wings_6",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Body_Bird",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tail_Bat",[],[],],["TkResourceDescriptorData","_Tail_Bird",[],[],],["TkResourceDescriptorData","_Tail_Bug",[],[],],["TkResourceDescriptorData","_Tail_Long",[],[],],["TkResourceDescriptorData","_Tail_Thin",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_TThinAcc_0",[],[],],["TkResourceDescriptorData","_TThinAcc_1",[],[],],["TkResourceDescriptorData","_TThinAcc_2",[],[],],["TkResourceDescriptorData","_TThinAcc_3",[],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Head_Bat","_HBat_0","_HBat_1","_Head_Bird","_HBAcc_1","_HBAcc_2","_HBAcc_3","_HBAcc_4","_HBAcc_5","_Wings_1","_Wings_2","_W2Acc_0","_W2Acc_1","_Wings_3","_Wings_4","_Wings_5","_Wings_6","_Body_Bird","_Tail_Bat","_Tail_Bird","_Tail_Bug","_Tail_Long","_Tail_Thin","_TThinAcc_0","_TThinAcc_1","_TThinAcc_2","_TThinAcc_3"]

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