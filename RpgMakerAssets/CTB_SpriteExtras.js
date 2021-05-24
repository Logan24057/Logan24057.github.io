//=============================================================================
// RPG Maker MZ - CT_Bolt's Sprite Extras
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.30 CT_Bolt's Sprite Extras
 * @author CT_Bolt
 *
 * @command set
 * @text Set X & Y Offset
 * @desc Set X & Y Offset
 *
 * @arg eventId
 * @default 0
 * @text Event ID
 * @desc Event ID (0 = this event)
 *
 * @arg x
 * @default 0
 * @text X Offset
 * @desc X Offset
 *
 * @arg y
 * @default 0
 * @text Y Offset
 * @desc Y Offset
 *
 * @command setX
 * @text Set X Offset
 * @desc Set X Offset
 *
 * @arg eventId
 * @default 0
 * @text Event ID
 * @desc Event ID (0 = this event)
 *
 * @arg x
 * @default 0
 * @text X Offset
 * @desc X Offset
 *
 * @command setY
 * @text Set Y Offset
 * @desc Set Y Offset
 *
 * @arg eventId
 * @default 0
 * @text Event ID
* @desc Event ID (0 = this event)
 *
 * @arg y
 * @default 0
 * @text Y Offset
 * @desc Y Offset
 *
 * @command setZ
 * @text Set Z Layer Index
 * @desc Set Z Layer Index
 *
 * @arg eventId
 * @default 0
 * @text Event ID
 * @desc Event ID (0 = this event)
 *
 * @arg z
 * @default
 * @text Z Layer Index
 * @desc Z Layer Index
 *
 * @command setHue
 * @text Set Hue
 * @desc Set Hue (Range -360 to 360)
 *
 * @arg eventId
 * @default 0
 * @text Event ID
 * @desc Event ID (0 = this event)
 *
 * @arg hue
 * @default 0
 * @text Hue
 * @desc Hue (Range -360 to 360)
 *
 * @help CTB_SpriteExtras.js
 *
 * This plugin provides extra sprite features
 * Notetags:
 *   <xOff: javascript/> 
 *   <yOff: javascript/>
 *   <hue: javascript/>
 *   <srcX: javascript/>
 *   <srcY: javascript/>
 *   <frameW: javascript/>
 *   <frameH: javascript/>
 *
 * Examples: 
 *   <xOff: 2/><yOff: -24/>
 *   <hue: 45/>
 *   <xOff:-12/><yOff:26/><srcX:sx-48/><srcY:sy-48/><frameW:96/><frameH:96/>
 *   <yOff:-18/>
 *   <xOff: $gameVariables.value(1)/><yOff: $gameVariables.value(2) || -24/>
 * 
 * Plugin Commands:
 *   Set X & Y Offset
 *   Set X Offset
 *   Set Y Offset
 *   Set Hue
 *
 * Version: 1.30
 *
 */

var CTB = CTB || {}; CTB.SpriteExtras  = CTB.SpriteExtras || {};
var Imported = Imported || {}; Imported["CTB_SpriteExtras"] = 1.30;

(($_$) => {
    const pluginName = "CTB_SpriteExtras";
	
	DataManager.getCurrentEventId = function(){
		if ($gameMap._interpreter.character(0)){
			if ($gameMap._interpreter.character(0)._eventId){
				return $gameMap._interpreter.character(0)._eventId;;
			}
		}
	}
	
    PluginManager.registerCommand(pluginName, "set", args => {
		if (eval(args.eventId) === 0) {args.eventId = DataManager.getCurrentEventId()};
		var e = SceneManager._scene._spriteset._characterSprites.filter(function(v){if (v._character._eventId === eval(args.eventId)) {return v;}});
		e.forEach(function(v){if (v._character){v._character._ctbExtra.x = eval(args.x); v._character._ctbExtra.y = eval(args.y);}});
    });
	
    PluginManager.registerCommand(pluginName, "setX", args => {
		if (eval(args.eventId) === 0) {args.eventId = DataManager.getCurrentEventId()};
		var e = SceneManager._scene._spriteset._characterSprites.filter(function(v){if (v._character._eventId === eval(args.eventId)) {return v;}});		
		e.forEach(function(v){if (v._character){v._character._ctbExtra.x = eval(args.x);}});
    });

    PluginManager.registerCommand(pluginName, "setY", args => {
		if (eval(args.eventId) === 0) {args.eventId = DataManager.getCurrentEventId()};
		var e = SceneManager._scene._spriteset._characterSprites.filter(function(v){if (v._character._eventId === eval(args.eventId)) {return v;}});		
		e.forEach(function(v){if (v._character){v._character._ctbExtra.y = eval(args.y);}});
    });

    PluginManager.registerCommand(pluginName, "setZ", args => {
		if (eval(args.eventId) === 0) {args.eventId = DataManager.getCurrentEventId()};
		var e = SceneManager._scene._spriteset._characterSprites.filter(function(v){if (v._character._eventId === eval(args.eventId)) {return v;}});		
		e.forEach(function(v){if (v._character){v._character._ctbExtra.z = eval(args.z);}});
    });
	
    PluginManager.registerCommand(pluginName, "setHue", args => {
		if (eval(args.eventId) === 0) {args.eventId = DataManager.getCurrentEventId()};
		var e = SceneManager._scene._spriteset._characterSprites.filter(function(v){if (v._character._eventId === eval(args.eventId)) {return v;}});		
		e.forEach(function(v){if (v._character){v._character._ctbExtra.hue = eval(args.hue);}});
    });

	DataManager.getCommandValue = function(a, d) {
		var v = null;
		if (a && d){			
			var z = '/>', c = d + ':'; 
			var i = [a.indexOf(c)];
			if (i[0] > -1){
				i[1] = i[0]+c.length; i[2] = a.indexOf(z, i[1]);
				if (i[2] === -1) {i[2] = null}; i[3] = i[2] ? i[2]-i[1]: null;
				v = a.substr(i[1], i[3]).trim();
			};
		};
		return v;
	};

	//-----------------------------------------------------------------------------
	// Sprite_Character
	//
	// The sprite for displaying a character.

	$_$['Sprite_Character.prototype.initialize'] = Sprite_Character.prototype.initialize;
	Sprite_Character.prototype.initialize = function(character) {
		$_$['Sprite_Character.prototype.initialize'].apply(this, arguments);
		this._character = this._character || {};
		if (this._character._eventId){
			var note = $dataMap.events[this._character._eventId].note;
			if (note){
				var v = null;				
				v = DataManager.getCommandValue(note, 'xOff'); if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.xNote = v;};
				v = DataManager.getCommandValue(note, 'yOff'); if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.yNote = v;};
				v = DataManager.getCommandValue(note, 'z'); if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.zNote = v;};
				v = DataManager.getCommandValue(note, 'hue');  if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.hueNote = v;};
				v = DataManager.getCommandValue(note, 'srcX');  if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.srcX_Note = v;};
				v = DataManager.getCommandValue(note, 'srcY');  if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.srcY_Note = v;};
				v = DataManager.getCommandValue(note, 'frameW');  if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.frameW_Note = v;};
				v = DataManager.getCommandValue(note, 'frameH');  if (v) {this._character._ctbExtra = this._character._ctbExtra || {}; this._character._ctbExtra.frameH_Note = v;};
			}
		}
		this._character._ctbExtra = this._character._ctbExtra || {x:0, y:0, hue: 0};
		this._character._ctbExtra.x = this._character._ctbExtra.x || eval(this._character._ctbExtra.xNote) || 0;
		this._character._ctbExtra.y = this._character._ctbExtra.y || eval(this._character._ctbExtra.yNote) || 0;
		this._character._ctbExtra.z = this._character._ctbExtra.z || this._character._ctbExtra.zNote || null;
		this._character._ctbExtra.hue = this._character._ctbExtra.hue || eval(this._character._ctbExtra.hueNote) || 0;
		this._character._ctbExtra.srcX = this._character._ctbExtra.srcX || this._character._ctbExtra.srcX_Note || null;
		this._character._ctbExtra.srcY = this._character._ctbExtra.srcY || this._character._ctbExtra.srcY_Note || null;
		this._character._ctbExtra.frameW = this._character._ctbExtra.frameW || this._character._ctbExtra.frameW_Note || 0;
		this._character._ctbExtra.frameH = this._character._ctbExtra.frameH || this._character._ctbExtra.frameH_Note || 0;
	};

	Sprite_Character.prototype.updateTileFrame = function() {
		const tileId = this._tileId;
		const pw = this.patternWidth();
		const ph = this.patternHeight();
		const sx = ((Math.floor(tileId / 128) % 2) * 8 + (tileId % 8)) * pw;
		const sy = (Math.floor((tileId % 256) / 8) % 16) * ph;

		var n = {
			sx: eval(this._character._ctbExtra.srcX) || sx,
			sy: eval(this._character._ctbExtra.srcY) || sy,
			pw: eval(this._character._ctbExtra.frameW) || pw,
			ph: eval(this._character._ctbExtra.frameH) || ph
		};

		this.setFrame(n.sx, n.sy, n.pw, n.ph);
	};
	
	Sprite_Character.prototype.updateCharacterFrame = function() {
		const pw = this.patternWidth();
		const ph = this.patternHeight();
		const sx = (this.characterBlockX() + this.characterPatternX()) * pw;
		const sy = (this.characterBlockY() + this.characterPatternY()) * ph;
		
		var n = {
			sx: eval(this._character._ctbExtra.srcX) || sx,
			sy: eval(this._character._ctbExtra.srcY) || sy,
			pw: eval(this._character._ctbExtra.frameW) || pw,
			ph: eval(this._character._ctbExtra.frameH) || ph
		};
		
		this.updateHalfBodySprites();
		if (this._bushDepth > 0) {
			const d = this._bushDepth;
			this._upperBody.setFrame(n.sx, n.sy, n.pw, n.ph - d);
			this._lowerBody.setFrame(n.sx, n.sy + n.ph - d, n.pw, d);
			this.setFrame(n.sx, n.sy, 0, n.ph);
		} else {
			this.setFrame(n.sx, n.sy, n.pw, n.ph);
		}
	};

	Sprite_Character.prototype.updatePosition = function() {
		this.x = this._character.screenX()+this._character._ctbExtra.x;
		this.y = this._character.screenY()+this._character._ctbExtra.y;	
		this.z = eval(this._character._ctbExtra.z) || this._character.screenZ();
	};
	
	$_$['Sprite_Character.prototype.updateOther'] = Sprite_Character.prototype.updateOther;
	Sprite_Character.prototype.updateOther = function() {
		$_$['Sprite_Character.prototype.updateOther'].apply(this, arguments);
		if (this._character){
			this._character._ctbExtra = this._character._ctbExtra || {};
			if (this._character._ctbExtra.hue){
				this.setHue(this._character._ctbExtra.hue);
			}
		}
	};

})(CTB.SpriteExtras);