var PART_IMAGES = [
]

var THIS_TYPE = "ANTELOPEROBOT"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "ANTELOPEROBOT"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Head_CurveB",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_CurveBAcc_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_Head_Disc",[],[],],["TkResourceDescriptorData","_Head_WedgeInverted",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Acc_BackCanisters",[],[],],["TkResourceDescriptorData","_Acc_BackDisc",[],[],],["TkResourceDescriptorData","_Acc_BackMagnet",[],[],],["TkResourceDescriptorData","_Acc_BackOrb",[],[],],["TkResourceDescriptorData","_Acc_BackShrooms",[],[],],["TkResourceDescriptorData","_Acc_None",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Ribcage_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LegsBack_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Plating_1",[],[],],["TkResourceDescriptorData","_Plating_2",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_CordsLegBack_",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_Body_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_LegsFront_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_CordsLegFront_",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_ShoulderAcc_Canisters",[],[],],["TkResourceDescriptorData","_ShoulderAcc_Discs",[],[],],["TkResourceDescriptorData","_ShoulderAcc_Hex",[],[],],["TkResourceDescriptorData","_ShoulderAcc_None",[],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Head_CurveB","_CurveBAcc_2","_Head_Disc","_Head_WedgeInverted","_Acc_BackCanisters","_Acc_BackDisc","_Acc_BackMagnet","_Acc_BackOrb","_Acc_BackShrooms","_Acc_None","_Ribcage_1","_LegsBack_1","_Plating_1","_Plating_2","_CordsLegBack_","_Body_1","_LegsFront_1","_CordsLegFront_","_ShoulderAcc_Canisters","_ShoulderAcc_Discs","_ShoulderAcc_Hex","_ShoulderAcc_None"]

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