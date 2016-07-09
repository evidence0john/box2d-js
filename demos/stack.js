demos.stack = {};
demos.stack.initWorld = function(world) {
	var sd = new b2BoxDef();
	var bd = new b2BodyDef();
	bd.AddShape(sd);
	sd.density = 1.0;
	sd.friction = 0.5;
	sd.extents.Set(10, 10);
	var i,j;
	for (j = 0; j < 10; j++) {
		for (i = 0; i < 10; i++) {
			bd.position.Set(150-Math.random()*0+22*j, (0-i*22));
			world.CreateBody(bd);
		}
	}
	bd.position.Set(100,10);
	world.CreateBody(bd);
}
demos.InitWorlds.push(demos.stack.initWorld);


