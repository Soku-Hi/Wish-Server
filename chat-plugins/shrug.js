exports.commands = {
  shrug: function (target, room, user) {
    var targets = target.split(','),
    length = targets.length;
    while (length--)
      targets[length] = targets[length].trim();
    if (room.id === 'lobby' && this.can('broadcast', null, room)) {
      if (!target) return '¯\\_(ツ)_/¯';
      if (targets[0] && !targets[1]) return '¯\\_(ツ)_/¯ ' + targets[0];
      if (targets[0] == 'pm' && targets[1] && !targets[2]) return this.parse('/pm ' + targets[1] + ', ¯\\_(ツ)_/¯');
  }
  if (room.id === 'lobby' &&    !this.can('broadcast', null, room)) return this.errorReply('You must be voiced to use this command in this room.');
  else if (room.id !== 'lobby') {
   if (!target) return '¯\\_(ツ)_/¯';
   if (targets[0] && !targets[1]) return '¯\\_(ツ)_/¯ ' + targets[0];
   if (targets[0] == 'pm' && targets[1] && !targets[2]) return this.parse('/pm ' + targets[1] + ', ¯\\_(ツ)_/¯');
  }
},
  shrughelp: function () {
    if (!this.canBroadcast()) return;
     return this.sendReplyBox('Credit to Megas4ever for making these! :]<br>/shrug - Makes you send ¯\_(ツ)_/¯ to the room. <br> /shrug example sends ¯\_(ツ)_/¯ example.<br> /shrug pm, user - sends ¯\_(ツ)_/¯ to the user.');
  },
};
