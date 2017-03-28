Blockly.Blocks['Steps'] = {
    init: function() {
        this.appendDummyInput().appendField("Move").appendField(new Blockly.FieldNumber(0), "steps").appendField("steps");
        this.setInputsInline(false);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
var distance=0;

Blockly.JavaScript['Steps'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var step = block.getFieldValue('steps');
  distance+=Number(step);
   var code = document.getElementById('avatar').style.transform='translateX('+distance+'px)';
   return code;
  };
  Blockly.Blocks['xrotate'] = {
    init: function() {
      this.appendValueInput("Angle")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Clockwise","C"], ["AntiClockwise","A"]]), "R_angle")
          .appendField(new Blockly.FieldAngle(90), "angle")
          .appendField("in degree");
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setColour(150);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  var degree = 0;
  Blockly.JavaScript['xrotate'] = function(block) {
    var dropdown_r_angle = block.getFieldValue('R_angle');
    var angle_angle = block.getFieldValue('angle');
    degree+=Number(angle_angle);
    var value_angle = Blockly.JavaScript.valueToCode(block, 'Angle', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    if(dropdown_r_angle==='C'){
       code = document.getElementById('avatar').style.transform='rotate('+degree+'deg)';
    }
    else{
      code = document.getElementById('avatar').style.transform='rotate('+'-'+degree+'deg)';
    }
    return code;
  };
  Blockly.Blocks['costume'] = {
 init: function() {
   this.appendDummyInput()
       .appendField("Change Avatar")
       .appendField(new Blockly.FieldDropdown([["costume1","cos1"], ["costume2","cos2"]]), "avatar");
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setColour(230);
   this.setTooltip('');
   this.setHelpUrl('');
 }
};

Blockly.JavaScript['costume'] = function(block) {
 var dropdown_name = block.getFieldValue('avatar');
 // TODO: Assemble JavaScript into code variable.
 if(dropdown_name==='cos1')
   code=document.getElementById('avatar').src='monkey2.png';
 else if(dropdown_name==='cos2')
   code=document.getElementById('avatar').src='monkey1.png';
 return code;
};
