var PART_IMAGES = [
]

var THIS_TYPE = "JELLYFISH"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "JELLYFISH"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Proc_Jellyfish",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_FbBody_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Type_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Eyestalks_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Ballz_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Eyestalks_1",[],[],],["TkResourceDescriptorData","_Eyestalks_2",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tendrils_2",[],[],],["TkResourceDescriptorData","_Tendrils_1",[],[],],],],],],],[],],],],],],],[],],["TkResourceDescriptorData","_FbBody_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Bottom_4",[],[],],["TkResourceDescriptorData","_Bottom_2",[],[],],["TkResourceDescriptorData","_Bottom_5",[],[],],["TkResourceDescriptorData","_Bottom_1",[],[],],["TkResourceDescriptorData","_Bottom_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Plingers_1",[],[],],["TkResourceDescriptorData","_Plingers_2",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Top_1",[],[],],["TkResourceDescriptorData","_Top_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_EyesD_2",[],[],],["TkResourceDescriptorData","_EyesD_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_Top_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Fill_1",[],[],],["TkResourceDescriptorData","_Fill_2",[],[],],["TkResourceDescriptorData","_Fill_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tip_1",[],[],],],],],],],[],],],],],],],[],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Proc_Jellyfish","_FbBody_1","_Type_1","_Eyestalks_3","_Ballz_1","_Eyestalks_1","_Eyestalks_2","_Tendrils_2","_Tendrils_1"]

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