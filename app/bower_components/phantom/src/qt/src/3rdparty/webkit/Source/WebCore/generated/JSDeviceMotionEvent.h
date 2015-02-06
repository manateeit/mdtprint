/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#ifndef JSDeviceMotionEvent_h
#define JSDeviceMotionEvent_h

#if ENABLE(DEVICE_ORIENTATION)

#include "JSEvent.h"
#include <runtime/JSObjectWithGlobalObject.h>

namespace WebCore {

class DeviceMotionEvent;

class JSDeviceMotionEvent : public JSEvent {
    typedef JSEvent Base;
public:
    JSDeviceMotionEvent(JSC::Structure*, JSDOMGlobalObject*, PassRefPtr<DeviceMotionEvent>);
    static JSC::JSObject* createPrototype(JSC::ExecState*, JSC::JSGlobalObject*);
    virtual bool getOwnPropertySlot(JSC::ExecState*, const JSC::Identifier& propertyName, JSC::PropertySlot&);
    virtual bool getOwnPropertyDescriptor(JSC::ExecState*, const JSC::Identifier& propertyName, JSC::PropertyDescriptor&);
    static const JSC::ClassInfo s_info;

    static JSC::Structure* createStructure(JSC::JSGlobalData& globalData, JSC::JSValue prototype)
    {
        return JSC::Structure::create(globalData, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), AnonymousSlotCount, &s_info);
    }

    static JSC::JSValue getConstructor(JSC::ExecState*, JSC::JSGlobalObject*);

    // Custom attributes
    JSC::JSValue acceleration(JSC::ExecState*) const;
    JSC::JSValue accelerationIncludingGravity(JSC::ExecState*) const;
    JSC::JSValue rotationRate(JSC::ExecState*) const;
    JSC::JSValue interval(JSC::ExecState*) const;

    // Custom functions
    JSC::JSValue initDeviceMotionEvent(JSC::ExecState*);
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | Base::StructureFlags;
};


class JSDeviceMotionEventPrototype : public JSC::JSObjectWithGlobalObject {
    typedef JSC::JSObjectWithGlobalObject Base;
public:
    static JSC::JSObject* self(JSC::ExecState*, JSC::JSGlobalObject*);
    static const JSC::ClassInfo s_info;
    virtual bool getOwnPropertySlot(JSC::ExecState*, const JSC::Identifier&, JSC::PropertySlot&);
    virtual bool getOwnPropertyDescriptor(JSC::ExecState*, const JSC::Identifier&, JSC::PropertyDescriptor&);
    static JSC::Structure* createStructure(JSC::JSGlobalData& globalData, JSC::JSValue prototype)
    {
        return JSC::Structure::create(globalData, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), AnonymousSlotCount, &s_info);
    }
    JSDeviceMotionEventPrototype(JSC::JSGlobalData& globalData, JSC::JSGlobalObject* globalObject, JSC::Structure* structure) : JSC::JSObjectWithGlobalObject(globalData, globalObject, structure) { }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | Base::StructureFlags;
};

// Functions

JSC::EncodedJSValue JSC_HOST_CALL jsDeviceMotionEventPrototypeFunctionInitDeviceMotionEvent(JSC::ExecState*);
// Attributes

JSC::JSValue jsDeviceMotionEventAcceleration(JSC::ExecState*, JSC::JSValue, const JSC::Identifier&);
JSC::JSValue jsDeviceMotionEventAccelerationIncludingGravity(JSC::ExecState*, JSC::JSValue, const JSC::Identifier&);
JSC::JSValue jsDeviceMotionEventRotationRate(JSC::ExecState*, JSC::JSValue, const JSC::Identifier&);
JSC::JSValue jsDeviceMotionEventInterval(JSC::ExecState*, JSC::JSValue, const JSC::Identifier&);
JSC::JSValue jsDeviceMotionEventConstructor(JSC::ExecState*, JSC::JSValue, const JSC::Identifier&);

} // namespace WebCore

#endif // ENABLE(DEVICE_ORIENTATION)

#endif
