var PART_IMAGES = [
]

var THIS_TYPE = "CRAB" //ROCKCREATURE
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "ROCKCREATURE"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Mantis_A",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Legs_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_LegA_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LegC_1",[],[],],["TkResourceDescriptorData","_LegC_NULL",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LegB_1",[],[],],["TkResourceDescriptorData","_LegB_NULL",[],[],],],],],],],[],],["TkResourceDescriptorData","_Legs_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_LeggC_none",[],[],],["TkResourceDescriptorData","_LeggC_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LeggA_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LeggD_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LeggB_none",[],[],],["TkResourceDescriptorData","_LeggB_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Legs_2",[],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Mantis_A","_Legs_1","_LegA_1","_LegC_1","_LegC_NULL","_LegB_1","_LegB_NULL","_Legs_3","_LeggC_none","_LeggC_1","_LeggA_1","_LeggD_1","_LeggB_none","_LeggB_1","_Legs_2"]

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