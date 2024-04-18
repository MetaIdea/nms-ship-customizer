var PART_IMAGES = [
]

var THIS_TYPE = "BONECAT"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "BONECAT"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BoneCat_",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Type_Round",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Acc_Spikes",[],[],],["TkResourceDescriptorData","_Acc_Crystals",[],[],],["TkResourceDescriptorData","_Acc_None",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Head_A",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Eyes_A",[],[],],["TkResourceDescriptorData","_Eyes_B",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Plate_A",[],[],],["TkResourceDescriptorData","_Plate_Fin",[],[],],["TkResourceDescriptorData","_Plate_Horn",[],[],],["TkResourceDescriptorData","_Plate_Holes",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_HeadHoles_Shroom",[],[],],],],],],],[],],],],],],],[],],["TkResourceDescriptorData","_Head_B",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_EyesB_A",[],[],],["TkResourceDescriptorData","_EyesB_B",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Body_CurveSpike",[],[],],["TkResourceDescriptorData","_Body_RoundA",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Back_PlateHoles",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BackHoles_Worm",[],[],],["TkResourceDescriptorData","_BackHoles_CrystalsA",[],[],],["TkResourceDescriptorData","_BackHoles_Shrooms",[],[],],],],],],],[],],["TkResourceDescriptorData","_Back_Plate",[],[],],["TkResourceDescriptorData","_Back_PlateTall",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Limbs_A",[],[],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_BoneCat_","_Type_Round","_Acc_Spikes","_Acc_Crystals","_Acc_None","_Head_A","_Eyes_A","_Eyes_B","_Plate_A","_Plate_Fin","_Plate_Horn","_Plate_Holes","_HeadHoles_Shroom","_Head_B","_EyesB_A","_EyesB_B","_Body_CurveSpike","_Body_RoundA","_Back_PlateHoles","_BackHoles_Worm","_BackHoles_CrystalsA","_BackHoles_Shrooms","_Back_Plate","_Back_PlateTall","_Limbs_A"]

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