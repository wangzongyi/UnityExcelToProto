# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/Person.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/Person.proto',
  package='proto',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x12proto/Person.proto\x12\x05proto\"&\n\x06Person\x12\n\n\x02id\x18\x01 \x01(\t\x12\x10\n\x08username\x18\x02 \x01(\t\"t\n\tPersonMap\x12*\n\x05items\x18\x01 \x03(\x0b\x32\x1b.proto.PersonMap.ItemsEntry\x1a;\n\nItemsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x1c\n\x05value\x18\x02 \x01(\x0b\x32\r.proto.Person:\x02\x38\x01\x62\x06proto3')
)




_PERSON = _descriptor.Descriptor(
  name='Person',
  full_name='proto.Person',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='proto.Person.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='username', full_name='proto.Person.username', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=29,
  serialized_end=67,
)


_PERSONMAP_ITEMSENTRY = _descriptor.Descriptor(
  name='ItemsEntry',
  full_name='proto.PersonMap.ItemsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='proto.PersonMap.ItemsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='proto.PersonMap.ItemsEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=_b('8\001'),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=126,
  serialized_end=185,
)

_PERSONMAP = _descriptor.Descriptor(
  name='PersonMap',
  full_name='proto.PersonMap',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='proto.PersonMap.items', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_PERSONMAP_ITEMSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=69,
  serialized_end=185,
)

_PERSONMAP_ITEMSENTRY.fields_by_name['value'].message_type = _PERSON
_PERSONMAP_ITEMSENTRY.containing_type = _PERSONMAP
_PERSONMAP.fields_by_name['items'].message_type = _PERSONMAP_ITEMSENTRY
DESCRIPTOR.message_types_by_name['Person'] = _PERSON
DESCRIPTOR.message_types_by_name['PersonMap'] = _PERSONMAP
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Person = _reflection.GeneratedProtocolMessageType('Person', (_message.Message,), dict(
  DESCRIPTOR = _PERSON,
  __module__ = 'proto.Person_pb2'
  # @@protoc_insertion_point(class_scope:proto.Person)
  ))
_sym_db.RegisterMessage(Person)

PersonMap = _reflection.GeneratedProtocolMessageType('PersonMap', (_message.Message,), dict(

  ItemsEntry = _reflection.GeneratedProtocolMessageType('ItemsEntry', (_message.Message,), dict(
    DESCRIPTOR = _PERSONMAP_ITEMSENTRY,
    __module__ = 'proto.Person_pb2'
    # @@protoc_insertion_point(class_scope:proto.PersonMap.ItemsEntry)
    ))
  ,
  DESCRIPTOR = _PERSONMAP,
  __module__ = 'proto.Person_pb2'
  # @@protoc_insertion_point(class_scope:proto.PersonMap)
  ))
_sym_db.RegisterMessage(PersonMap)
_sym_db.RegisterMessage(PersonMap.ItemsEntry)


_PERSONMAP_ITEMSENTRY._options = None
# @@protoc_insertion_point(module_scope)
