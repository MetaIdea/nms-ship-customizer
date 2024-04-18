var PART_IMAGES = [
]

var THIS_TYPE = "BUTTERFLY"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "BUTTERFLY"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Insect_Alien",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_CWings_3",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_CBody_1",[],[],],["TkResourceDescriptorData","_CBody_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_Insect_Long",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BHead_1",[],[],],["TkResourceDescriptorData","_BHead_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BH2_0",[],[],],["TkResourceDescriptorData","_BH2_1",[],[],],["TkResourceDescriptorData","_BH2_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_BHead_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BH3_0",[],[],],["TkResourceDescriptorData","_BH3_1",[],[],],["TkResourceDescriptorData","_BH3_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_BHead_4",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BH4_0",[],[],],["TkResourceDescriptorData","_BH4_1",[],[],],["TkResourceDescriptorData","_BH4_2",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_BWings_2",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_BBody_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_BB1_0",[],[],],["TkResourceDescriptorData","_BB1_1",[],[],],],],],],],[],],],],],],],[],],["TkResourceDescriptorData","_Insect_Short",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_ABody_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AB1_0",[],[],],["TkResourceDescriptorData","_AB1_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_ABody_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AB2_0",[],[],],["TkResourceDescriptorData","_AB2_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_ABody_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AB3_0",[],[],],["TkResourceDescriptorData","_AB3_1",[],[],],],],],],],[],],["TkResourceDescriptorData","_ABody_4",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AB4_0",[],[],],["TkResourceDescriptorData","_AB4_1",[],[],],],],],],],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_AWings_1",[],[],],],],["TkResourceDescriptorList",[["TkResourceDescriptorData","_AHead_1",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AH1_0",[],[],],["TkResourceDescriptorData","_AH1_1",[],[],],["TkResourceDescriptorData","_AH1_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_AHead_2",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AH2_0",[],[],],["TkResourceDescriptorData","_AH2_1",[],[],],["TkResourceDescriptorData","_AH2_2",[],[],],],],],],],[],],["TkResourceDescriptorData","_AHead_3",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_AH3_0",[],[],],["TkResourceDescriptorData","_AH3_1",[],[],],["TkResourceDescriptorData","_AH3_2",[],[],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Insect_Alien","_CWings_3","_CBody_1","_CBody_2","_Insect_Long","_BHead_1","_BHead_2","_BH2_0","_BH2_1","_BH2_2","_BHead_3","_BH3_0","_BH3_1","_BH3_2","_BHead_4","_BH4_0","_BH4_1","_BH4_2","_BWings_2","_BBody_1","_BB1_0","_BB1_1","_Insect_Short","_ABody_1","_AB1_0","_AB1_1","_ABody_2","_AB2_0","_AB2_1","_ABody_3","_AB3_0","_AB3_1","_ABody_4","_AB4_0","_AB4_1","_AWings_1","_AHead_1","_AH1_0","_AH1_1","_AH1_2","_AHead_2","_AH2_0","_AH2_1","_AH2_2","_AHead_3","_AH3_0","_AH3_1","_AH3_2"]

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