// source: menu/v1/menu.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.menu.v1.Menu');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.menu.v1.Country');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.menu.v1.Menu = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.menu.v1.Menu, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.menu.v1.Menu.displayName = 'proto.menu.v1.Menu';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.menu.v1.Menu.prototype.toObject = function(opt_includeInstance) {
  return proto.menu.v1.Menu.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.menu.v1.Menu} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.menu.v1.Menu.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fullName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ownersMessage: jspb.Message.getFieldWithDefault(msg, 4, ""),
    topCardImage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: (f = msg.getCountry()) && proto.menu.v1.Country.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.menu.v1.Menu}
 */
proto.menu.v1.Menu.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.menu.v1.Menu;
  return proto.menu.v1.Menu.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.menu.v1.Menu} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.menu.v1.Menu}
 */
proto.menu.v1.Menu.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnersMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopCardImage(value);
      break;
    case 6:
      var value = new proto.menu.v1.Country;
      reader.readMessage(value,proto.menu.v1.Country.deserializeBinaryFromReader);
      msg.setCountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.menu.v1.Menu.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.menu.v1.Menu.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.menu.v1.Menu} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.menu.v1.Menu.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFullName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOwnersMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTopCardImage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.menu.v1.Country.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.menu.v1.Menu.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.menu.v1.Menu.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string full_name = 3;
 * @return {string}
 */
proto.menu.v1.Menu.prototype.getFullName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.setFullName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string owners_message = 4;
 * @return {string}
 */
proto.menu.v1.Menu.prototype.getOwnersMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.setOwnersMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string top_card_image = 5;
 * @return {string}
 */
proto.menu.v1.Menu.prototype.getTopCardImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.setTopCardImage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Country country = 6;
 * @return {?proto.menu.v1.Country}
 */
proto.menu.v1.Menu.prototype.getCountry = function() {
  return /** @type{?proto.menu.v1.Country} */ (
    jspb.Message.getWrapperField(this, proto.menu.v1.Country, 6));
};


/**
 * @param {?proto.menu.v1.Country|undefined} value
 * @return {!proto.menu.v1.Menu} returns this
*/
proto.menu.v1.Menu.prototype.setCountry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.menu.v1.Menu} returns this
 */
proto.menu.v1.Menu.prototype.clearCountry = function() {
  return this.setCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.menu.v1.Menu.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 6) != null;
};


