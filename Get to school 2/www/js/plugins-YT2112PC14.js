// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"SRD_UndertaleBattleSystem","status":true,"description":"Allows developers to create bullet-hell dodge systems in their battles; based off of the system from Undertale.","parameters":{"Draw Collision Masks":"false","== Sound Effects ==":"","Damage SE":"Damage4","Death Damage SE":"Ice2","Death Fade SE":"Collapse2","Shield SE":"Shot2","Shoot SE":"Shot1","== Enemy Bubble ==":"","Bubble Window Skin":"","Auto Save Texts":"true","== Image Hues ==":"","Normal Hue":"0","Gravity Hue":"200","Shield Hue":"100","Trap Hue":"300","Shooter Hue":"40","== Gravity Mode ==":"","Jump Power":"4","Jump Limit":"25","Jump Gravity":"0.4","== Shield Mode ==":"","Shield Image":"","Shield Thickness":"6","== Trap Mode ==":"","Trap Move Speed":"15","Trap Positions":"30, 90, 150","Trap Color":"#FF00FF","== Shooter Mode ==":"","Bullet Image":"","Shoot Cooldown":"30","Bullet X Speed":"0","Bullet Y Speed":"-8","== Defaults ==":"","Default Duration":"1000","Default Mode":"0","Default Invincibility":"60","Default P. Speed":"3","Default P. Shape":"circle","Default P. Width":"20","Default P. Height":"20","Default P. Radius":"10","== Attack Defaults ==":"","Image":"","Animation Frames":"","Animation Speed":"4","Type":"","Initial X":"this.window.x + (this.window.width / 2)","Initial Y":"this.window.y + (this._player.getHeight() / 2)","Collision Type":"circle","Radius":"13","Width":"26","Height":"26","X Speed":"0","Y Speed":"2","X Accel":"0","Y Accel":"0","X Scale":"1","Y Scale":"1","Opacity":"255","Rotation":"0","Visibility":"true","Color":"random","Spawn Rate":"100","Spawn Delay":"0","Delete Distance":"1","Destructible":"true","Direct Code":"","Initial Code":"","== Battle Frame ==":"","Collision Padding":"5","Background Opacity":"255","Frame X":"(Graphics.width / 2) - (width / 2)","Frame Width":"180","Frame Height":"180","== Actor HP Window ==":"","Actor Frame X":"(Graphics.boxWidth / 2) - (this._singleActorHP.width / 2)","Actor Frame Y":"Graphics.height - this._singleActorHP.height - 20","Actor Frame Width":"400","Actor Frame Height":"this.fittingHeight(1)"}},
{"name":"SRD_MenuBackgrounds","status":true,"description":"Allows you to add/customize backgrounds and change window opacity for all menu scenes.","parameters":{"Scale Background":"true","== Main Menu ==":"","Menu Background":"","Menu Opacity":"255","Menu Scale":"1","Menu Motion":"","== Item Menu ==":"","Item Background":"","Item Opacity":"255","Item Scale":"1","Item Motion":"","== Skill Menu ==":"","Skill Background":"","Skill Opacity":"255","Skill Scale":"1","Skill Motion":"","== Equip Menu ==":"","Equip Background":"","Equip Opacity":"255","Equip Scale":"1","Equip Motion":"","== Status Menu ==":"","Status Background":"","Status Opacity":"255","Status Scale":"1","Status Motion":"","== Save Menu ==":"","Save Background":"","Save Opacity":"255","Save Scale":"1","Save Motion":"","== Options Menu ==":"","Options Background":"","Options Opacity":"255","Options Scale":"1","Options Motion":"","== End Menu ==":"","End Background":"","End Opacity":"255","End Scale":"1","End Motion":"","== Custom 1 ==":"","Custom 1 Scene":"","Custom 1 Background":"","Custom 1 Opacity":"255","Custom 1 Scale":"1","Custom 1 Motion":"","== Custom 2 ==":"","Custom 2 Scene":"","Custom 2 Background":"","Custom 2 Opacity":"255","Custom 2 Scale":"1","Custom 2 Motion":"","== Custom 3 ==":"","Custom 3 Scene":"","Custom 3 Background":"","Custom 3 Opacity":"255","Custom 3 Scale":"1","Custom 3 Motion":"","== Custom 4 ==":"","Custom 4 Scene":"","Custom 4 Background":"","Custom 4 Opacity":"255","Custom 4 Scale":"1","Custom 4 Motion":"","== Custom 5 ==":"","Custom 5 Scene":"","Custom 5 Background":"","Custom 5 Opacity":"255","Custom 5 Scale":"1","Custom 5 Motion":"","== Custom 6 ==":"","Custom 6 Scene":"","Custom 6 Background":"","Custom 6 Opacity":"255","Custom 6 Scale":"1","Custom 6 Motion":"","== Custom 7 ==":"","Custom 7 Scene":"","Custom 7 Background":"","Custom 7 Opacity":"255","Custom 7 Scale":"1","Custom 7 Motion":"","== Custom 8 ==":"","Custom 8 Scene":"","Custom 8 Background":"","Custom 8 Opacity":"255","Custom 8 Scale":"1","Custom 8 Motion":"","== Custom 9 ==":"","Custom 9 Scene":"","Custom 9 Background":"","Custom 9 Opacity":"255","Custom 9 Scale":"1","Custom 9 Motion":"","== Custom 10 ==":"","Custom 10 Scene":"","Custom 10 Background":"","Custom 10 Opacity":"255","Custom 10 Scale":"1","Custom 10 Motion":"","== Custom 11 ==":"","Custom 11 Scene":"","Custom 11 Background":"","Custom 11 Opacity":"255","Custom 11 Scale":"1","Custom 11 Motion":"","== Custom 12 ==":"","Custom 12 Scene":"","Custom 12 Background":"","Custom 12 Opacity":"255","Custom 12 Scale":"1","Custom 12 Motion":"","== Custom 13 ==":"","Custom 13 Scene":"","Custom 13 Background":"","Custom 13 Opacity":"255","Custom 13 Scale":"1","Custom 13 Motion":"","== Custom 14 ==":"","Custom 14 Scene":"","Custom 14 Background":"","Custom 14 Opacity":"255","Custom 14 Scale":"1","Custom 14 Motion":"","== Custom 15 ==":"","Custom 15 Scene":"","Custom 15 Background":"","Custom 15 Opacity":"255","Custom 15 Scale":"1","Custom 15 Motion":"","== Custom 16 ==":"","Custom 16 Scene":"","Custom 16 Background":"","Custom 16 Opacity":"255","Custom 16 Scale":"1","Custom 16 Motion":"","== Custom 17 ==":"","Custom 17 Scene":"","Custom 17 Background":"","Custom 17 Opacity":"255","Custom 17 Scale":"1","Custom 17 Motion":"","== Custom 18 ==":"","Custom 18 Scene":"","Custom 18 Background":"","Custom 18 Opacity":"255","Custom 18 Scale":"1","Custom 18 Motion":"","== Custom 19 ==":"","Custom 19 Scene":"","Custom 19 Background":"","Custom 19 Opacity":"255","Custom 19 Scale":"1","Custom 19 Motion":"","== Custom 20 ==":"","Custom 20 Scene":"","Custom 20 Background":"","Custom 20 Opacity":"255","Custom 20 Scale":"1","Custom 20 Motion":""}},
{"name":"SRD_AltMenuScreen_BustSelect","status":true,"description":"Alternative Menu Screen Bust Select. Uses busts to select Actors in the menu. It also displays Side View Battlers.","parameters":{"Show Gold Window":"true","Show SV Window":"true","== Bust Position ==":"","Bust X Pos":"0","Bust Y Pos":"0","== Bust Window ==":"","Bust Window Rows":"1","Bust Window Cols":"1","Bust Window X":"20","Bust Window Y":"(Graphics.height / 2) - (this._statusWindow.height / 2)","Bust Window Width":"(Graphics.width / 2) - 40","Bust Window Height":"Graphics.height - 120","== Command Window ==":"","Command Window X":"Graphics.width - this._commandWindow.width - 20","Command Window Y":"(this._statusWindow.y + this._statusWindow.height) - this._commandWindow.height","Max Columns":"1","Visible Rows":"5","== HP Window ==":"","Draw MP Bar":"false","Draw TP Bar":"false","HP Window X":"this._commandWindow.x","HP Window Y":"((this._commandWindow.y - (this._goldWindow.y + this._goldWindow.height)) / 2) - (this._hpWindow.height / 2) + (this._goldWindow.y + this._goldWindow.height)","HP Window Width":"256","== Battler Window ==":"","Battler X Pos":"6","Battler Y Pos":"6","B. Window X":"Graphics.width - 128","B. Window Y":"this._hpWindow.y","B. Window Width":"this.fittingHeight(2)","B. Window Height":"this.fittingHeight(2)","== Gold Window ==":"","Gold Window X":"this._commandWindow.x","Gold Window Y":"this._statusWindow.y"}}
];
