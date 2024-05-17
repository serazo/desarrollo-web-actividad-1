import React from "react";
import {Link} from "react-router-dom";
export const SobreNosotros = () =>{
  return (
    <main>
      <div className="container">
        <h2 className="text-center">Acerca de nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut enim quis nisi lobortis auctor non ut ligula. Sed rutrum, nisl sed rhoncus sollicitudin, sem justo porttitor quam, non porta nibh risus eu quam. Proin a magna et purus pretium viverra at id tellus. Proin ac faucibus nibh. Pellentesque pellentesque, risus at condimentum porttitor, neque ligula efficitur nisl, non viverra ante massa at nibh. Integer non risus quis odio cursus egestas eu blandit diam. Cras lacinia condimentum dolor, ut efficitur lectus varius non. Donec non erat ac enim volutpat dignissim non at est. Sed faucibus, mauris sed euismod euismod, felis tortor bibendum lectus, non malesuada eros risus eleifend dui. Proin blandit convallis mi, vel lobortis ante tristique ut. Phasellus hendrerit libero vitae elementum malesuada. </p>
        <p>Morbi mollis massa a elementum pulvinar. Duis sagittis efficitur est sit amet mattis. Quisque et lorem a ex eleifend porttitor a id lectus. Quisque porttitor in dui vel commodo. Suspendisse erat nibh, feugiat non enim ac, malesuada varius turpis. Curabitur in mattis eros, at pulvinar odio. Suspendisse at euismod lorem. Ut laoreet, augue sed auctor gravida, diam ex aliquet neque, vitae dictum nisl odio vitae velit. Ut luctus mauris quis nibh venenatis suscipit. Aliquam placerat urna et eros auctor, quis porta dolor fringilla. Fusce purus elit, molestie quis eros a, interdum dapibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at erat pellentesque, dapibus dolor vel, pellentesque odio. Vestibulum orci metus, lacinia sed bibendum eu, efficitur at eros. Sed laoreet tempor augue, quis fermentum enim tristique ac. Nam et imperdiet mauris. </p>
        <p>Nullam ullamcorper sagittis lobortis. Aenean cursus mauris mauris, accumsan luctus odio varius quis. Ut semper volutpat neque, id gravida risus rhoncus nec. Vestibulum diam lectus, congue sed sagittis et, efficitur vitae eros. Nulla gravida blandit lacus vel feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae metus ac augue gravida efficitur. Vivamus nulla urna, facilisis sit amet nisi sed, volutpat lobortis turpis. Morbi tincidunt consequat urna, congue placerat diam viverra ut. Vestibulum eget lobortis massa. Morbi nec mollis ipsum. </p>
        <p>Proin vel ex at est posuere vehicula. Nullam cursus quam id mattis maximus. Donec ac aliquam augue. Integer eleifend, est at tincidunt faucibus, metus augue viverra libero, vitae auctor neque lacus et lectus. Ut sagittis ex at mauris rutrum, eu tempor est vulputate. Vivamus pellentesque tempus pretium. Maecenas condimentum imperdiet tortor. Nam rutrum ante vel ipsum porttitor vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id libero lorem. Nunc porttitor augue sit amet lorem imperdiet suscipit. Maecenas eget dui pretium, tristique nunc iaculis, rhoncus ipsum. </p>
        <div className="text-center">
          <Link
            className="btn btn-primary"
            to='/'
          >
            <i className="icon-home"></i> Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
};