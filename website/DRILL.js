var PART_IMAGES = [
]

var THIS_TYPE = "DRILL"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "DRILL"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Drill_A",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_DrillSpin_A",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_DrillV_A",[],[],],["TkResourceDescriptorData","_DrillV_B",[],[],],["TkResourceDescriptorData","_DrillV_C",[],[],],["TkResourceDescriptorData","_DrillV_D",[],[],],["TkResourceDescriptorData","_DrillV_E",[],[],],["TkResourceDescriptorData","_DrillV_F",[],[],],["TkResourceDescriptorData","_DrillV_G",[],[],],["TkResourceDescriptorData","_DrillV_H",[],[],],["TkResourceDescriptorData","_DrillV_I",[],[],],["TkResourceDescriptorData","_DrillV_J",[],[],],],],],],],[],],],],],],],[[],[],],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Drill_A","_DrillSpin_A","_DrillV_A","_DrillV_B","_DrillV_C","_DrillV_D","_DrillV_E","_DrillV_F","_DrillV_G","_DrillV_H","_DrillV_I","_DrillV_J"]

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