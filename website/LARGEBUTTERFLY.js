var PART_IMAGES = [
]

var THIS_TYPE = "LARGEBUTTERFLY"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "LARGEBUTTERFLY"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_FWings_01",[],[],],["TkResourceDescriptorData","_FWings_02",[],[],],["TkResourceDescriptorData","_FWings_03",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_MothBody_01",[],[],],["TkResourceDescriptorData","_MothBody_L01",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_TWings_01",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_BWings_01",[],[],],["TkResourceDescriptorData","_BWings_02",[],[],],["TkResourceDescriptorData","_BWings_03",[],[],],["TkResourceDescriptorData","_BWings_04",[],[],],["TkResourceDescriptorData","_BWings_Null",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_MWings_01",[],[],],["TkResourceDescriptorData","_MWings_02",[],[],],["TkResourceDescriptorData","_MWings_Null",[],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_FWings_01","_FWings_02","_FWings_03","_MothBody_01","_MothBody_L01","_TWings_01","_BWings_01","_BWings_02","_BWings_03","_BWings_04","_BWings_Null","_MWings_01","_MWings_02","_MWings_Null"]

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