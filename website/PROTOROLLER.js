var PART_IMAGES = [
]

var THIS_TYPE = "PROTOROLLER"
DATA[THIS_TYPE]["CATEGORY"] = "CREATURE"
DATA[THIS_TYPE]["TYPELETTER"] = "PROTOROLLER"

DATA[THIS_TYPE]["DESCRIPTOR"] = ["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Strange_Roll",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Roll_SingleJoint",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Roll_Beetle",[],[],],["TkResourceDescriptorData","_Roll_Tubes",[],[],],["TkResourceDescriptorData","_Roll_Blob",[],[],],["TkResourceDescriptorData","_Roll_Eyes",[],[],],["TkResourceDescriptorData","_Roll_Tendril",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Tendrils_A",[],[],],["TkResourceDescriptorData","_Tendrils_B",[],[],],["TkResourceDescriptorData","_Tendrils_C",[],[],],],],],],],[],],["TkResourceDescriptorData","_Roll_FatBug",[],[],],["TkResourceDescriptorData","_Roll_ClockBall",[],[[],[],[],],],["TkResourceDescriptorData","_Roll_Engeryball",[["TkModelDescriptorList", [["TkResourceDescriptorList",[["TkResourceDescriptorData","_Internal_0",[],[],],["TkResourceDescriptorData","_Internal_A",[],[],],["TkResourceDescriptorData","_Internal_B",[],[],],["TkResourceDescriptorData","_Internal_C",[],[],],],],],],],[],],["TkResourceDescriptorData","_Roll_Bubble",[],[],],["TkResourceDescriptorData","_Roll_Links",[],[],],["TkResourceDescriptorData","_Roll_Slime",[],[],],["TkResourceDescriptorData","_Roll_Curl",[],[],],["TkResourceDescriptorData","_Roll_Wheel",[],[],],],],],],],[],],],],],],],[],],],],],]
DATA[THIS_TYPE]["PARTS"] = ["_Strange_Roll","_Roll_SingleJoint","_Roll_Beetle","_Roll_Tubes","_Roll_Blob","_Roll_Eyes","_Roll_Tendril","_Tendrils_A","_Tendrils_B","_Tendrils_C","_Roll_FatBug","_Roll_ClockBall","_Roll_Engeryball","_Internal_0","_Internal_A","_Internal_B","_Internal_C","_Roll_Bubble","_Roll_Links","_Roll_Slime","_Roll_Curl","_Roll_Wheel"]

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