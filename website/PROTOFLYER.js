var PART_IMAGES = [
]

var THIS_TYPE = "PROTOFLYER"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "PROTOFLYER"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Strange_Float",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Float_RadialWave",[],[[],],],["TkResourceDescriptorData","_Float_TrailOrb",[],[[],],],["TkResourceDescriptorData","_Float_Metalorb",[],[[],],],["TkResourceDescriptorData","_Float_EyeFish",[],[],],["TkResourceDescriptorData","_Float_RoseFish",[],[],],["TkResourceDescriptorData","_Float_FlatCreature",[],[],],["TkResourceDescriptorData","_Float_RidgeEel",[],[],],["TkResourceDescriptorData","_Float_Elephloater",[],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Strange_Float","_Float_RadialWave","_Float_TrailOrb","_Float_Metalorb","_Float_EyeFish","_Float_RoseFish","_Float_FlatCreature","_Float_RidgeEel","_Float_Elephloater"]

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