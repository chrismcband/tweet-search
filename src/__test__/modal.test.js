import React from 'react';
 import { shallow, mount } from 'enzyme';
-import { Modal }  from '../components/Modal';
+import Modal  from '../components/Modal';

 function setup() {
   const props = {
@@ -29,8 +29,8 @@ describe('<Modal />', () => {
   });

   it('displays modal content', () => {
-    const { wrapper, enzymeWrapper } = setup();
-    expect( enzymeWrapper.find('div').hasClass('modal-content')).toBe(true)
+    const { wrapper } = setup();
+    expect(wrapper.find('div').hasClass('modal-content')).toBe(true)
   })

   it('closes the modal overlay when clicked on', () => {
