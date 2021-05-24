//=============================================================================
// TWings Plugins
// TWings_CharList.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc v1.02 (MZ) Create a list of characters window
 * @author TWings (Pierre-Alain Huille)
 * @base TWings_CoreLight
 * @orderAfter TWings_CoreLight
 * @url https://twings.itch.io/
 *
 * @param DispTexts
 * @text Texts
 *
 * @param cmdName
 * @parent DispTexts
 * @type text
 * @text Menu command name
 * @desc Name in the menu.
 * @default Star Tablet
 *
 * @param hiddenName
 * @parent DispTexts
 * @type text
 * @text Default hidden names
 * @desc Default name to display for hidden characters.
 * @default ?????
 *
 * @param noHint
 * @parent DispTexts
 * @type text
 * @text No hint
 * @desc Default text to display when no hint available.
 * @default No hint available
 *
 * @param CharsParams
 * @text Characters
 *
 * @param charPool
 * @parent CharsParams
 * @type struct<CharPool>[]
 * @text Characters List
 * @desc List of relevant characters.
 *
 * @param charPoolSelectVar
 * @parent CharsParams
 * @type variable
 * @text List select var
 * @desc Variable to use for list selection (0 to not use).
 * @default 0
 *
 * @param WinParams
 * @text Windows
 *
 * @param cmdDisplaySwitchId
 * @parent WinParams
 * @type switch
 * @text Menu access switch
 * @desc Specified switch controls Menu access.
 * @default 1
 *
 * @param wCols
 * @parent WinParams
 * @type number
 * @min 1
 * @max 5
 * @text Columns
 * @desc Number of columns to display
 * @default 4
 *
 * @param touchUI
 * @parent WinParams
 * @type boolean
 * @text Touch UI
 * @desc Modify the window display for buttons UI.
 * @default true
 * 
 * @param wWidth
 * @parent WinParams
 * @type number
 * @min 808
 * @text Window width
 * @desc Width of the upper window.
 * @default 808
 *
 * @param wHeight
 * @parent WinParams
 * @type number
 * @min 441
 * @text Window height
 * @desc Height of the upper window.
 * @default 441
 *
 * @param charShadows
 * @parent WinParams
 * @type boolean
 * @text Shadows
 * @desc Display shadows for locked characters.
 * @default true
 *
 *
 * @command preloadCharPics
 * @text Preload Pictures
 * @desc Preload the character pictures.
 *
 * @command openCharList
 * @text Open Window
 * @desc Open the Character List window.
 *
 *
 * @help
 * Free to use with proper credit for non-commercial games.
 * Contact me for commercial games : Discord https://discord.gg/m85SkuY
 *
 * --------------------------------------------------------------------------------
 *
 * This plugin create a new menu that displays a predefined list of characters.
 * It's inspired from the Suikoden games tablet of stars.
 * You can choose which character to include.
 * You can hide characters who are still locked
 * and display short hints to find them.
 *
 * This plugin requires to be properly parametered to work :
 *
 * - You need to define a switch to activate the Menu access.
 * - You need to define the characters list with at least the following param :
 *   + Actor id : refers to the id in the database.
 *
 * --------------------------------------------------------------------------------
 *
 * Plugin Commands:
 *
 * --------------------------------------------------------------------------------
 *
 * preloadCharPics
 * Preloads the characters sprites and faces.
 * To use before openCharList if you notice some pictures missing.
 * You'll also want to add a wait command between the two commands.
 *
 * openCharList
 * Directly open the characters List window.
 *
 * Use example :
 *           preloadCharPics
 *           wait 15
 *           openCharList
 *
 * --------------------------------------------------------------------------------
 *
 * Parameters:
 *
 * --------------------------------------------------------------------------------
 *
 * - Texts :
 * Customise some of the plugin's default texts.
 *   - Menu command name :
 *   Name of the command used to access the feature in the pause menu.
 *   - Default hidden names :
 *   Text to display for hidden characters.
 *   - No hint :
 *   Text to display when there's no hint available.
 *
 * - Characters :
 * Parameters used to define your characters list.
 *   - Charcters List :
 *   Core of the plugin. You won't get any result without filling it properly.
 *     - Actor id :
 *     Id of the actor in the database. This is a required parameter !
 *     - Hint text :
 *     Displays this hint when the character is locked.
 *     You can use up to 4 lines.
 *     - Found Switch id :
 *     When this switch is on, unlock the character display.
 *     if 0, the character is displayed by default.
 *     - List id :
 *     (optional advanced feature)
 *     Works with List select var.
 *     The character will be displayed only when the value is the same as
 *     the variable (leave at 0 to not use it).
 *     - Unlocked text :
 *     Displays when the character is unlocked.
 *	   You can use up to 4 lines.
 *     If left empty displays profile from database.
 *	   In that case you're limited to the 2 available lines.
 *
 *   - List select var :
 *   (optional advanced feature)
 *   Defines a variable used to filter the displayed list.
 *   Works with the 4th parameters in the characters list (List id).
 *   When specified, the window will display only characters with
 *   their 4th parameter to 0 or equal to the variable value.
 *
 * - Windows :
 * Customise some of the plugin's default texts.
 *   - Menu access switch id :
 *   Id of the switch to use to enable/disable access in the pause menu.
 *   - Columns:
 *   Number of columns used to display your list.
 *   - Touch UI :
 *   Activates or desactivate the gap above the main window for UI buttons.
 *   - Window width :
 *   Width of the main upper window.
 *   - Window height :
 *   Height of the main upper window.
 *   - Shadows :
 *   When ON, shadows will be displayed for locked characters.
 *   When OFF, nothing will be displayed except the hidden name text.
 *
 * --------------------------------------------------------------------------------
 *
 * Versions history :
 *
 * --------------------------------------------------------------------------------
 *
 * - Version 1.02 :
 *      + Fixed a display bug when page scrolling.
 *
 * - Version 1.01 :
 *      + New Touch UI window parameter.
 * 
 * - Version 1.00 :
 *      + Release.
 */
/*~struct~CharPool:
 * @param charId
 * @type actor
 * @text Actor
 * @default 1
 * @desc Actor to display.
 * @param charHint
 * @type note
 * @text Hint text
 * @default ""
 * @desc Hint to display before the actor is found.
 * @param charSwitch
 * @type switch
 * @default 0
 * @text Found Switch
 * @desc Switch to indicate that the actor has been found.
 * @param SelectVar
 * @type number
 * @min 0
 * @default 0
 * @text List id
 * @desc (advanced) id of the list including this actor.
 * @param charDesc
 * @type note
 * @text Unlocked text
 * @default ""
 * @desc Description text to display after the actor has been found.
 * @param showSwitch
 * @type switch
 * @default 0
 * @text Show Switch
 * @desc (advanced) the actor will be visible only when this switch is ON.
 */

 TW.charlist=TW.charlist||{},TW.windows=TW.windows||{},TW.windows.TWCharList=TW.windows.TWCharList||{};class TW_CharacterRef{constructor(t,a,i,e,r,o){this.id=t,this.hint=a||"",this.details=i||"",this.swValue=e,this.hero=r,null==o&&(o=0),this.show=Number(o)}}class TW_CharacterPool{constructor(){this.charList=Array(),this.nbChars=0}addChar(t,a,i,e,r,o){this.charList[this.nbChars]=new TW_CharacterRef(t,a,i,e,r,o),this.nbChars++}getHeroList(t){let a=Array();for(let i=0;i<this.nbChars;i++){const e=this.charList[i].show;e&&!$gameSwitches.value(e)||0!=this.charList[i].hero&&this.charList[i].hero!=t||a.push(this.charList[i])}return a}getLength(t){return this.getHeroList(t).length}}TW.charlist.params=PluginManager.parameters("TWings_CharList"),TW.windows.TWCharList.cmdDisplaySwitchId=Number(TW.charlist.params.cmdDisplaySwitchId||1),TW.windows.TWCharList.cmdName=String(TW.charlist.params.cmdName||"Star Tablet"),TW.windows.TWCharList.sHiddenName=String(TW.charlist.params.hiddenName||"?????"),TW.windows.TWCharList.sNoHint=String(TW.charlist.params.noHint||"No hint available"),TW.windows.TWCharList.bShadows=JSON.parse(TW.charlist.params.charShadows||!0),TW.windows.TWCharList.touchUI=JSON.parse(TW.charlist.params.touchUI||!0),TW.windows.TWCharList.wWidth=Number(TW.charlist.params.wWidth||808),TW.windows.TWCharList.wHeight=Number(TW.charlist.params.wHeight||441),TW.windows.TWCharList.wCols=Number(TW.charlist.params.wCols||4),TW.charlist.charPoolSelectVar=Number(TW.charlist.params.charPoolSelectVar||0),TW.charlist.aCharPool=JSON.parse(TW.charlist.params.charPool),TW.charlist.poolLength=TW.charlist.aCharPool.length,TW.charlist.charPool=new TW_CharacterPool;for(let t=0;t<TW.charlist.poolLength;t++){let a=JSON.parse(TW.charlist.aCharPool[t]),i=JSON.parse(a.charHint),e=JSON.parse(a.charDesc);TW.charlist.charPool.addChar(a.charId,i,e,a.charSwitch,a.SelectVar,a.showSwitch)}function Scene_TWCharList(){this.initialize.apply(this,arguments)}function Window_TWCharList(){this.initialize.apply(this,arguments)}function Window_TWCharDetail(){this.initialize.apply(this,arguments)}TW.charlist.params=!0,TW.charlist.aCharPool=[],PluginManager.registerCommand("TWings_CharList","preloadCharPics",()=>{TW.preLoad()}),PluginManager.registerCommand("TWings_CharList","openCharList",()=>{SceneManager.push(Scene_TWCharList)}),Window_StatusBase.prototype.loadFaceImages=function(){TW.preLoad()},TW.preLoad=function(){for(const t of $dataActors)if(t){const a=new Game_Actor(t.id);ImageManager.loadFace(a.faceName()),ImageManager.loadCharacter(a.characterName()),TW.windows.TWCharList.bShadows&&ImageManager.loadShadowChar(a.characterName())}for(const t of $gameActors._data)t&&(ImageManager.loadFace(t.faceName()),ImageManager.loadCharacter(t.characterName()),TW.windows.TWCharList.bShadows&&ImageManager.loadShadowChar(t.characterName()))},Bitmap.prototype.darken=function(){const t=this.width,a=this.height;let i=this.canvas,e=this.context,r=document.createElement("canvas"),o=r.getContext("2d");r.width=t,r.height=a,o.drawImage(i,0,0,t,a,1,1,t,a),e.save(),e.fillStyle="rgba(0, 0, 0, 0.9)",e.fillRect(0,0,t,a),e.globalCompositeOperation="destination-in",e.drawImage(r,0,0,t,a,0,0,t,a),e.restore()},ImageManager.loadShadowChar=function(t){return this.loadBitmap("img/characters/",t,!0)},ImageManager.loadBitmap=function(t,a,i){if(a){const e=t+Utils.encodeURI(a)+".png";return i?this.loadShadowBitmap(e,1):this.loadBitmapFromUrl(e)}return this._emptyBitmap},ImageManager.loadShadowBitmap=function(t,a){const i=this._cache,e=t+a;return i[e]||(i[e]=Bitmap.load(t),i[e].addLoadListener(function(){i[e].darken()})),i[e]},Scene_Menu.prototype.commandTWCharList=function(){SceneManager.push(Scene_TWCharList)},TW.windows.TWCharList.Scene_Menu_createCommandWindow=Scene_Menu.prototype.createCommandWindow,Scene_Menu.prototype.createCommandWindow=function(){TW.windows.TWCharList.Scene_Menu_createCommandWindow.call(this),$gameSwitches.value(TW.windows.TWCharList.cmdDisplaySwitchId)&&this._commandWindow.setHandler("TWCharList",this.commandTWCharList.bind(this))},TW.windows.TWCharList.Window_MenuCommand_addOriginalCommands=Window_MenuCommand.prototype.addOriginalCommands,Window_MenuCommand.prototype.addOriginalCommands=function(){TW.windows.TWCharList.Window_MenuCommand_addOriginalCommands.call(this),$gameSwitches.value(TW.windows.TWCharList.cmdDisplaySwitchId)&&this.addTWCharListCommand()},Window_MenuCommand.prototype.addTWCharListCommand=function(){this.needsCommand("TWCharList")&&this.addCommand(TW.windows.TWCharList.cmdName,"TWCharList",!0)},Scene_TWCharList.prototype=Object.create(Scene_MenuBase.prototype),Scene_TWCharList.prototype.constructor=Scene_TWCharList,Scene_TWCharList.prototype.initialize=function(){Scene_MenuBase.prototype.initialize.call(this)},Scene_TWCharList.prototype.create=function(){Scene_MenuBase.prototype.create.call(this),this.createListWindow(),this.createDetailWindow()},Scene_TWCharList.prototype.createListWindow=function(){const t=TW.windows.TWCharList.wWidth,a=TW.windows.TWCharList.wHeight-this.mainAreaTop(),i=this.mainAreaTop();this._listWindow=new Window_TWCharList(new Rectangle(0,i,t,a)),this._listWindow.setHandler("cancel",this.popScene.bind(this)),this.addWindow(this._listWindow)},Scene_TWCharList.prototype.createDetailWindow=function(){const t=this._listWindow.x,a=this._listWindow.height+this.mainAreaTop(),i=this._listWindow.width,e=Graphics.boxHeight-a;this._detailWindow=new Window_TWCharDetail(t,a,i,e),this._listWindow.setDetailWindow(this._detailWindow),this.addWindow(this._detailWindow)},Scene_TWCharList.prototype.mainAreaTop=function(){return TW.windows.TWCharList.touchUI?this.buttonAreaBottom():0},Scene_TWCharList.prototype.start=function(){Scene_MenuBase.prototype.start.call(this)},Window_TWCharList.prototype=Object.create(Window_Selectable.prototype),Window_TWCharList.prototype.constructor=Window_TWCharList,Window_TWCharList.lastTopRow=0,Window_TWCharList.lastIndex=0,Window_TWCharList.prototype.initialize=function(t){Window_Selectable.prototype.initialize.call(this,t),this.setTopRow(Window_TWCharList.lastTopRow),this.select(Window_TWCharList.lastIndex),this.refresh(),this.activate()},Window_TWCharList.prototype.maxCols=function(){return TW.windows.TWCharList.wCols},Window_TWCharList.prototype.maxItems=function(){let t=0;return TW.charlist.charPoolSelectVar>0&&(t=$gameVariables.value(TW.charlist.charPoolSelectVar)),TW.charlist.charPool.getLength(t)},Window_TWCharList.prototype.itemHeight=function(){return 50},Window_TWCharList.prototype.select=function(t){if(this._index=t,this._stayCount=0,this.ensureCursorVisible(),this.refreshCursor(),this.callUpdateHelp(),this._detailWindow){let t=0;TW.charlist.charPoolSelectVar>0&&(t=$gameVariables.value(TW.charlist.charPoolSelectVar)),this._detailWindow.refresh(TW.charlist.charPool.getHeroList(t)[this._index])}},Window_TWCharList.prototype.refresh=function(){this.createContents(),this.drawAllItems()},Window_TWCharList.prototype.drawAllItems=function(){const t=this.topIndex();let a=0;TW.charlist.charPoolSelectVar>0&&(a=$gameVariables.value(TW.charlist.charPoolSelectVar)),TW.charlist.ActorList=TW.charlist.charPool.getHeroList(a),TW.charlist.colCount=0;let i=6,e=40,r=20;const o=(this.width-15)/this.maxCols();for(let a=0;a<this.maxVisibleItems();a++){let s=t+a;s<this.maxItems()&&(TW.charlist.colCount=s+1,this.drawItem(TW.charlist.ActorList[s],i,e,r,o,50),TW.charlist.colCount%this.maxCols()==0?(i+=50,e=40,r=20):(e+=o,r+=o))}},Window_TWCharList.prototype.drawItem=function(t,a,i,e,r,o){const s=$gameActors.actor(t.id);0==t.swValue||$gameSwitches.value(t.swValue)?(this.drawActorName(s,i,a,r),this.drawActorCharacter(s,e,a+40)):(this.drawText(TW.windows.TWCharList.sHiddenName,i,a,r),TW.windows.TWCharList.bShadows&&this.drawActorShadow(s,e,a+40))},Window_TWCharList.prototype.drawActorName=function(t,a,i,e){e=e||168,this.changeTextColor(ColorManager.hpColor(t)),this.drawText(t.name(),a,i,e)},Window_TWCharList.prototype.drawActorCharacter=function(t,a,i){this.drawCharacter(t.characterName(),t.characterIndex(),a,i)},Window_TWCharList.prototype.drawActorShadow=function(t,a,i){this.drawShadowChar(t.characterName(),t.characterIndex(),a,i)},Window_TWCharList.prototype.drawShadowChar=function(t,a,i,e){let r=ImageManager.loadShadowChar(t);const o=ImageManager.isBigCharacter(t),s=r.width/(o?3:12),n=r.height/(o?4:8),h=a,c=(h%4*3+1)*s,d=4*Math.floor(h/4)*n;this.contents.blt(r,c,d,s,n,i-s/2,e-n)},Window_TWCharList.prototype.setDetailWindow=function(t){this._detailWindow=t,this.update()},Window_TWCharDetail.prototype=Object.create(Window_Base.prototype),Window_TWCharDetail.prototype.constructor=Window_TWCharDetail,Window_TWCharDetail.prototype.initialize=function(t,a,i,e){Window_Base.prototype.initialize.call(this,new Rectangle(t,a,i,e));let r=0;TW.charlist.charPoolSelectVar>0&&(r=$gameVariables.value(TW.charlist.charPoolSelectVar)),this.refresh(TW.charlist.charPool.getHeroList(r)[0])},Window_TWCharDetail.prototype.refresh=function(t){const a=$gameActors.actor(t.id);if(this.contents.clear(),0==t.swValue||$gameSwitches.value(t.swValue)){const i=this.width-200;let e="",r=(e=""!=t.details?t.details.split(/[\r\n]+/):a.profile().split(/[\r\n]+/)).length;for(let t=0;t<r;t++)this.drawTextEx(e[t],150,this.lineHeight()*t,i);this.drawActorFace(a,0,0,142,143)}else{const a=this.width-100;if(""==t.hint)this.drawText(TW.windows.TWCharList.sNoHint,40,0,a);else{const i=t.hint.split(/[\r\n]+/),e=i.length;for(let t=0;t<e;t++)this.drawTextEx(i[t],40,this.lineHeight()*t,a)}}},Window_TWCharDetail.prototype.drawActorFace=function(t,a,i,e,r){this.drawFace(t.faceName(),t.faceIndex(),a,i,e,r)};