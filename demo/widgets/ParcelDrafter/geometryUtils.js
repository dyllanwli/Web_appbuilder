// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/webMercatorUtils dojo/Deferred dojo/_base/array dojo/_base/lang esri/geometry/geometryEngine esri/SpatialReference esri/geometry/scaleUtils".split(" "),function(B,y,z,l,C,D,A,k,u,E){var f={getProjectedGeometry:function(a,b,c){var e,d;e=new C;l.canProject(a,b)?(d=l.project(a,b),e.resolve(d)):c.project([a],b,function(a){d=a[0];e.resolve(d)});return e.promise},getDestinationPoint:function(a,b,c){var e=a.x*Math.PI/
180,d=b*Math.PI/180;b=Math.sin(d);var d=Math.cos(d),g=.9966471893352243*Math.tan(a.y*Math.PI/180);a=1/Math.sqrt(1+g*g);var f=g*a,v=Math.atan2(g,d),g=a*b,p=1-g*g,h=2.7233160610984375E11*p/4.040829998465916E13,k=1+h/16384*(4096+h*(-768+h*(320-175*h))),x=h/1024*(256+h*(-128+h*(74-47*h))),q,r,n,t=c/(6356752.314245*k),m,l=0;do h=Math.cos(2*v+t),q=Math.sin(t),r=Math.cos(t),n=x*q*(h+x/4*(r*(-1+2*h*h)-x/6*h*(-3+4*q*q)*(-3+4*h*h))),m=t,t=c/(6356752.314245*k)+n;while(1E-12<Math.abs(t-m)&&200>++l);if(200<=l)return console.log("Formula failed to converge"),
null;c=f*q-a*r*d;c=Math.atan2(f*r+a*q*d,.9966471893352243*Math.sqrt(g*g+c*c));p=2.0955066654848088E-4*p*(4+.003352810664775694*(4-3*p));e=(e+(Math.atan2(q*b,a*r-f*q*d)-.003352810664775694*(1-p)*g*(t+p*q*(h+p*r*(-1+2*h*h))))+3*Math.PI)%(2*Math.PI)-Math.PI;c=180*c/Math.PI;e=180*e/Math.PI;return new B(e,c,new u(4326))},getInverseCalculations:function(a,b){var c=b.x*Math.PI/180-a.x*Math.PI/180,e=.9966471893352243*Math.tan(a.y*Math.PI/180),d=1/Math.sqrt(1+e*e),e=e*d,g=.9966471893352243*Math.tan(b.y*Math.PI/
180),f=1/Math.sqrt(1+g*g),g=g*f,v,p,h,k,l,q,r,n,t,m=c,u,w=0;do{v=Math.sin(m);p=Math.cos(m);h=f*v*f*v+(d*g-e*f*p)*(d*g-e*f*p);h=Math.sqrt(h);if(0==h)return 0;k=e*g+d*f*p;l=Math.atan2(h,k);q=d*f*v/h;r=1-q*q;n=k-2*e*g/r;isNaN(n)&&(n=0);t=2.0955066654848088E-4*r*(4+.003352810664775694*(4-3*r));u=m;m=c+.003352810664775694*(1-t)*q*(l+t*h*(n+t*k*(-1+2*n*n)))}while(1E-12<Math.abs(m-u)&&200>++w);if(200<=w)return null;m=2.7233160610984375E11*r/4.040829998465916E13;w=m/1024*(256+m*(-128+m*(74-47*m)));c=Math.atan2(f*
v,d*g-e*f*p);d=Math.atan2(d*v,-e*f+d*g*p);c=(c+2*Math.PI)%(2*Math.PI);d=(d+2*Math.PI)%(2*Math.PI);e=Number((6356752.314245*(1+m/16384*(4096+m*(-768+m*(320-175*m))))*(l-w*h*(n+w/4*(k*(-1+2*n*n)-w/6*n*(-3+4*h*h)*(-3+4*n*n))))).toFixed(3));c=180*c/Math.PI;d=180*d/Math.PI;return{distance:e,initialBearing:c,finalBearing:d}},getLineBetweenPoints:function(a){var b,c=[];D.forEach(a,A.hitch(this,function(a){c.push([a.x,a.y])}));0<c.length&&(b=new y({paths:[c],spatialReference:{wkid:4326}}));return b},getAngleBetweenPoints:function(a,
b){var c=f.getInverseCalculations(a,b);return null===c?0:c.initialBearing},getDistanceBetweenPoints:function(a,b){var c=f.getInverseCalculations(a,b);return null===c?0:c.distance},getLengthOfGeometry:function(a){return(a=k.simplify(a))?k.geodesicLength(a,9001):0},getAreaOfGeometry:function(a){var b;a=k.simplify(a);b={};a?(b.acres=k.geodesicArea(a,109402),b.squareMeters=k.geodesicArea(a,109404),b.squareFeet=k.geodesicArea(a,109405),b.squareUSSurveyFeet=k.geodesicArea(a,109406)):(b.acres=0,b.squareMeters=
0,b.squareFeet=0,b.squareUSSurveyFeet=0);return b},getPolyLineFromPaths:function(a){var b,c;b=new y(new u({wkid:4326}));for(c=0;c<a.length;c++)b.addPath(a[c]);return b},getPolygonFromPolyLines:function(a,b,c,e){var d,f,k;d=[];e=e?new z(new u(e)):new z(new u({wkid:4326}));for(f=0;f<a.length;f++)for(k=0;k<a[f].length;k++)d.push(a[f][k]);b?d.push(A.clone(d[0])):c&&(d[d.length-1][0]=d[0][0],d[d.length-1][1]=d[0][1]);e.isClockwise(d)||d.reverse();e.addRing(d);return e},getPointsForArc:function(a,b,c,e){var d,
g=[],k,l;d=b-a;b=parseInt(d,10);0>=b&&(b=1);k=Math.abs(d)/Math.abs(b);if(0<k)for(d=0;d<Math.abs(b)+1;d++)l=a+k*d,(l=f.getDestinationPoint(c,l,Math.abs(e)))&&g.push(l);return g},getArcParam:function(a){var b;b={};0>a.distance?0>a.radius?(b.bearing=a.initBearing+90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint)):(b.bearing=a.initBearing-
90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint)):0<a.radius?(b.bearing=a.initBearing+90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint)):(b.bearing=
a.initBearing-90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint));return b},removeNegativeExponents:function(a){return 1<a.toString().toLowerCase().split("e-").length?0:a},getChordLengthFromArcLength:function(a,b){var c,e;a=Math.abs(a);e=Math.PI*Math.abs(b);c=Math.abs(b)*Math.sin(Math.abs(a)/Math.abs(b)/2);return a<=e?2*c:-2*
c},getArcLengthFromChordLength:function(a,b){var c;c=Math.abs(a);b=Math.abs(b);c=2*Math.asin(c/(2*b))*b;0>a&&(c=2*Math.PI*b-c);return c},chordBearingToTangentBearing:function(a,b,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(b));b/=Math.abs(b);a=a+90*b-c/Math.abs(c)*b*e;return f.removeNegativeExponents(0>a?a+360:360<=a?a%360:a)},tangentBearingToChordBearing:function(a,b,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(b));b/=Math.abs(b);a=a+90*b-c/Math.abs(c)*b*e;return f.removeNegativeExponents(0>
a?a+360:360<=a?a%360:a)},getUnitValueForSR:function(a){switch(E.getUnitValueForSR(a)){case 1:return"meters";case 111194.87428468118:return"meters";case .3048:return"feet";case .3048006096:case .3048006096012192:return"uSSurveyFeet"}},getRotationAngleBetweenPoints:function(a,b){var c,e,d,g;a=l.project(a,new u(102100));b=l.project(b,new u(102100));c=b.x-a.x;e=b.y-a.y;d=180*Math.atan2(Math.abs(c),Math.abs(e))/Math.PI;g=180*Math.atan2(Math.abs(e),Math.abs(c))/Math.PI;c=f.removeNegativeExponents(c);e=
f.removeNegativeExponents(e);d=f.removeNegativeExponents(d);g=f.removeNegativeExponents(g);if(0===e){if(0===c)return 0;if(0<c)return 90;if(0>c)return 270}else if(0<e){if(0===c)return 0;if(0<c)return d;if(0>c)return 270+g}else if(0>e){if(0===c)return 180;if(0<c)return 90+g;if(0>c)return 180+d}},getScaleDistanceBetweenPoints:function(a,b){a=l.project(a,new u(102100));b=l.project(b,new u(102100));var c=k.distance(a,b,9001);return f.removeNegativeExponents(c)}};return f});