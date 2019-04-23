'use strict'
String.prototype.clr = function (hexColor) { return `<font color='#${hexColor}'>${this}</font>` };

module.exports = function WhiskersInCombat(mod) {    
    const WhiskerIDs = [206100, 206101, 206102, 206103, 206104, 206105, 206106, 206107, 206108, 206109];
    const Message = 'Angler Whiskers are equipped!';
    
    mod.game.initialize('inventory');
    
    mod.game.me.on('enter_combat', () => { 
        if (mod.game.inventory.findInEquipment(WhiskerIDs)) {
            if (mod.settings.proxyMessage) 
                mod.command.message(Message.clr("FF0000"));
            
            if (mod.settings.whisperMessage)
                mod.send('S_CHAT', 2, {
                    channel: 7, 
                    authorName: '',
                    message: Message
                });
        }
    })

}
