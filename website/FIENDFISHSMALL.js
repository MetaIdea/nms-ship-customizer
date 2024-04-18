var PART_IMAGES = [
]

var THIS_TYPE = "FIENDFISHSMALL"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "FIENDFISHSMALL"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Fish_B",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_FbBody_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Type_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Eyestalks_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Ballz_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Eyestalks_1",[],[],],["TkResourceDescriptorData","_Eyestalks_2",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tendrils_2",[],[],],["TkResourceDescriptorData","_Tendrils_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Plingerss_3",[],[],],],],],],],[],],["TkResourceDescriptorData","_Tendrils_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Collar_1",[],[],],["TkResourceDescriptorData","_Collar_2",[],[],],],],],],],[],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Fish_B","_FbBody_1","_Type_1","_Eyestalks_3","_Ballz_1","_Eyestalks_1","_Eyestalks_2","_Tendrils_2","_Tendrils_3","_Plingerss_3","_Tendrils_1","_Collar_1","_Collar_2"]

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