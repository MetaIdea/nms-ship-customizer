var PART_IMAGES = [
]

var THIS_TYPE = "WEIRDROLL"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "WEIRDROLL"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Weird_Crystal",[],[],],["TkResourceDescriptorData","_Weird_Float",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Float_FractCube",[],[[],],],["TkResourceDescriptorData","_Float_BubblexOR",[],[[],],],["TkResourceDescriptorData","_Float_Shards",[],[[],[],],],["TkResourceDescriptorData","_Float_WireCell",[],[[],],],["TkResourceDescriptorData","_Float_HydroGardenxOR",[],[[],],],],],],],],[],],["TkResourceDescriptorData","_Weird_Roll",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Roll_SingleJoint",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Roll_Structure",[],[],],["TkResourceDescriptorData","_Roll_Contour",[],[[],[],],],["TkResourceDescriptorData","_Roll_BeamStone",[],[[],[],[],],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Weird_Crystal","_Weird_Float","_Float_FractCube","_Float_BubblexOR","_Float_Shards","_Float_WireCell","_Float_HydroGardenxOR","_Weird_Roll","_Roll_SingleJoint","_Roll_Structure","_Roll_Contour","_Roll_BeamStone"]

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