var documenterSearchIndex = {"docs":
[{"location":"api/#API-reference","page":"API","title":"API reference","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Delaunator]","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [Delaunator]\n","category":"page"},{"location":"api/#Delaunator.InfinitePolygon","page":"API","title":"Delaunator.InfinitePolygon","text":"InfinitePolygon\n\nThis is the type we use to represent dual cells / Voronoi cells. It's a possibly infinite polygon stored as an array of points with optional head and tail rays. \n\nMethods\n\nsegments to get the line segments for the polygon.\n\n\n\n\n\n","category":"type"},{"location":"api/#Delaunator.PointsFromMatrix-Tuple{T} where T<:(AbstractMatrix)","page":"API","title":"Delaunator.PointsFromMatrix","text":"PointsFromMatrix(A [,i1=1,i2=2])\n\nThis implicitly extracts 2d point tuples from a matrix using row indices i1 and i2 for the coordinates. The columns of the matrix because individual points. \n\nPointsFromMatrix(A) == vec(reinterpret(Tuple{Int,Int},A[1:2,:]))\n\nThis function can be used to transparently map a matrix into a Delaunator set of points. (There is no copying involved).\n\nExample\n\nA = reshape(1:20, 4, 5)\nrval = triangulate(PointsFromMatrix(A))) # uses A[1:2,:]\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.contains-Tuple{Delaunator.InfinitePolygon, Any}","page":"API","title":"Base.contains","text":"contains(p::InfinitePolygon, pt)\n\nTest if the infinite polygon contains a point.     The point type pt must be able to be iterated to a pair      of numbers \n\n\n\n\n\n","category":"method"},{"location":"api/#Base.eachindex-Tuple{Delaunator.AbstractDelaunatorData}","page":"API","title":"Base.eachindex","text":"eachindex(t::AbstractDelaunatorData)\n\nReturn the indicies of each point in the dataset.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.isfinite","page":"API","title":"Base.isfinite","text":"isfinite(poly)\nisinfinite(poly)\n\nTest if the polygon is infinite or finite. \n\n\n\n\n\n","category":"function"},{"location":"api/#Delaunator._add_bbox_points-NTuple{5, Any}","page":"API","title":"Delaunator._add_bbox_points","text":"Walk the corners by their region codes to find points on the bounding box to add as we move from outside the bbox back inside...\n\n  # This is the order of codes in counter-clockwise order. \n  # Top-Left        Top         Top-Right\n  # 1001     <-     1000    <-  1010\n  #   |                           ^\n  #   v                           |\n  # 0001                         0010\n  # Left                         Right \n  #   |                           ^\n  #   v                           |  \n  # 0101     ->    0100     ->  0110\n  # Bottom Left   Bottom       Bottom right \n  # \n  # bottom right means x >= xmax (0010) and y <= ymin (0100)\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator._basictriangulation-NTuple{5, Any}","page":"API","title":"Delaunator._basictriangulation","text":"Create a function to simplify type management. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator._get_bounds-Union{Tuple{FloatType}, Tuple{Type{FloatType}, Any}} where FloatType","page":"API","title":"Delaunator._get_bounds","text":"Calculate upper and lowerbounds on the coordinates in points. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator._isright-Tuple{Any, Any, Any}","page":"API","title":"Delaunator._isright","text":"\n\n\n\n","category":"method"},{"location":"api/#Delaunator._max_dimension-Tuple{Any}","page":"API","title":"Delaunator._max_dimension","text":"Get the largest distance along x or y dimension. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator._temporaries-NTuple{9, Any}","page":"API","title":"Delaunator._temporaries","text":"Create a wrapper to simplify type management. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.basictriangulation-Tuple{}","page":"API","title":"Delaunator.basictriangulation","text":"bt, cdata = basictriangulation(IntType=Int32,] [FloatType=Float64,] [points];[sizehint=length(points),] [tol])\n\nAllocate a basic triangulation structure and associated compute data in order to implement the Deluantor method. \n\nThis method does not actaully compute a triangulation, but only allocates the data. See triangulate or update! for the computational methods.\n\nThe triangulation data structure\n\nThese data structures are explained at https://mapbox.github.io/delaunator/  (but here, all the indices have been modified a little).\n\ntriangles: a length T array of 3 tuples, where each tuple is a triangle\nhalfedges: The halfedge index for the edge in the triangle array. The halfedges for    triangle t are 3(t-1)+1, 3(t-1)+2, 3(t-2)+3. Each halfedge index gives the entry   of the other halfedge. \npoints a copy of the input set of points\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.bbox_intersection-Tuple{Any, Any, Any}","page":"API","title":"Delaunator.bbox_intersection","text":"Compute intersections between the bbox and a point and ray combo. Or on the line between two points.  For a line intersection, use tmin=0, tmax=1. For a ray intersection, use tmin=0, tmax=Inf. \n\nThis will return the origin point (pt) if there  are no intersections with the bbox. This will return a duplicated point if there is only a single intersection.\n\nThese return a coordinate that is guaranteed to be on the bbox, unless the return value is pt. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.bounds-Tuple{Delaunator.AbstractDelaunatorData}","page":"API","title":"Delaunator.bounds","text":"minpt, maxpt = bounds(t::AbstractDelaunatorData)\n\nReturn the coordinate bounds on the points. All of the points (as of the computation of the algorithm) lie within minpt <= pt <= maxpt. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.circumcenters!-Tuple{Any, Delaunator.AbstractDelaunatorData}","page":"API","title":"Delaunator.circumcenters!","text":"circumcenters!(array, bt; [collinearthresh=0])\n\nWrite information on the circumcenters into array. Array must  have length(bt.triangles) allocated. collinearthresh is an  option that \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.clippedpoly","page":"API","title":"Delaunator.clippedpoly","text":"clippedpoly(p::InfinitePolygon, bbox; [closed=true])\nclippedpoly!(pts, p::InfinitePolygon, bbox)\n\nreturns an empty array if the poly is entirely outside the bounding box. Otherwise, return a set of points that represent edges of the infinite polygon clipped to the bounding box. The set of points will  be closed (where the first point is equal to the last) if the closed=true option is set. The set of points may be closed even if this isn't set. Using closed=true results in simpler behavior. This is not an option on the mutating version, see below for how to get this functionality.  \n\nThe mutating version will update the pts array by using\n\n- `push!(pts, <newpt>)` \n- `last(pts)`\n- `isempty(pts)`\n\nIt will return the input type pts. \n\nExample code\n\n# generate polygon regions for all of the dualcells \n# clipped to a 5% expansion of the point bounding box\n# as a list of NaN separated paths, with all \n# polygons closed. \nusing GeometryBasics\nt = triangulate(rand(Point2f, 15))\nppts = Point2f[]\nfor i in eachindex(t)\n    ind = lastindex(ppts)\n    clippedpoly!(ppts, dualcell(t, i), margin_bbox(t, 0.05))\n    # check if the polygon was closed... \n    if lastindex(ppts) > ind # then we added point\n        if ppts[ind+1] != ppts[end] # check if we are closed\n            push!(ppts, ppts[ind+1]) # close the polygon\n        end \n    end \n    push!(ppts, (NaN,NaN)) # add the NaN separator \nend \n\nSee also dualcell. \n\n\n\n\n\n","category":"function"},{"location":"api/#Delaunator.clippedpoly!","page":"API","title":"Delaunator.clippedpoly!","text":"clippedpoly(p::InfinitePolygon, bbox; [closed=true])\nclippedpoly!(pts, p::InfinitePolygon, bbox)\n\nreturns an empty array if the poly is entirely outside the bounding box. Otherwise, return a set of points that represent edges of the infinite polygon clipped to the bounding box. The set of points will  be closed (where the first point is equal to the last) if the closed=true option is set. The set of points may be closed even if this isn't set. Using closed=true results in simpler behavior. This is not an option on the mutating version, see below for how to get this functionality.  \n\nThe mutating version will update the pts array by using\n\n- `push!(pts, <newpt>)` \n- `last(pts)`\n- `isempty(pts)`\n\nIt will return the input type pts. \n\nExample code\n\n# generate polygon regions for all of the dualcells \n# clipped to a 5% expansion of the point bounding box\n# as a list of NaN separated paths, with all \n# polygons closed. \nusing GeometryBasics\nt = triangulate(rand(Point2f, 15))\nppts = Point2f[]\nfor i in eachindex(t)\n    ind = lastindex(ppts)\n    clippedpoly!(ppts, dualcell(t, i), margin_bbox(t, 0.05))\n    # check if the polygon was closed... \n    if lastindex(ppts) > ind # then we added point\n        if ppts[ind+1] != ppts[end] # check if we are closed\n            push!(ppts, ppts[ind+1]) # close the polygon\n        end \n    end \n    push!(ppts, (NaN,NaN)) # add the NaN separator \nend \n\nSee also dualcell. \n\n\n\n\n\n","category":"function"},{"location":"api/#Delaunator.dualcell-Tuple{Delaunator.Triangulation, Integer}","page":"API","title":"Delaunator.dualcell","text":"dualcell(t, i)\ndualcell(t, centers, i)\n\nReturn the finite or infinite polygon description of the dual cell to a given point index in the triangulation. The dual cell is the  Voronoi cell to a Delaunay triangulation. \n\nThe default usage uses the circumcenters of the Delaunay triangles  as the coordinates of the Voroni vertices. However,  you can override this by giving another collection of centers.  The number of centers must be equal to the number  of triangles. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.edgelines-Tuple{Delaunator.Triangulation}","page":"API","title":"Delaunator.edgelines","text":"edgelines(t::Triangulation)\n\nReturn a generator that can be used with Makie's linesegments function to  display the edges of the triangulation. Each edge is only drawn once.\n\nExample\n\nusing GLMakie\nt = triangulate(rand(StableRNG(1), Point2f, 10))\nlinesegments(collect(edgelines(rval)))\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.hullpoly-Tuple{Delaunator.Triangulation}","page":"API","title":"Delaunator.hullpoly","text":"hullpoly(t)\n\nReturn the coordinates of the convex hull suitable for plotting as a polygon. \n\nExample\n\nt = triangulate(rand(StableRNG(1), Point2f, 10))\nf = scatter(t.points)\npoly!(f.axis,collect(hullpoly(t)),color=:transparent, strokewidth=1)\nf\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.hullvertices!-Tuple{Any, Delaunator.BasicTriangulation, Delaunator.TriangulationTemporaries}","page":"API","title":"Delaunator.hullvertices!","text":"hullvertices!(hull, bt, cdata)\n\nAfter an update! call, we can use the data structures to get a simple list of vertices on the convex hull. This routine will run push!(hull, v) for each vertex on the convex hull.  The order will be in order around the hull. This returns the hull variable. \n\nThis is part of the advanced interface. See  triangulate which returns a more complete data structure including the hull information automatically. \n\nSample calls\n\njulia> using Delaunator, StableRNGs, GeometryBasics\njulia> bt, cdata = basictriangulation(pts)\njulia> hull = hullvertices!(Vector{Int}, bt, cdata )\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.index_halfedges!-Tuple{Any, Any, Any}","page":"API","title":"Delaunator.index_halfedges!","text":"Store the first time a point occurs in halfedges into the index. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.inhull-Tuple{Delaunator.Triangulation, Integer}","page":"API","title":"Delaunator.inhull","text":"inhull(t::Triangulation, i::Integer)\n\nReturn the index of the vertex in the list of hull vertices (t.hull)  if it's in the hull, or zero if the vertex is not in the hull. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.isinfinite","page":"API","title":"Delaunator.isinfinite","text":"isfinite(poly)\nisinfinite(poly)\n\nTest if the polygon is infinite or finite. \n\n\n\n\n\n","category":"function"},{"location":"api/#Delaunator.margin_bbox","page":"API","title":"Delaunator.margin_bbox","text":"bbox = margin_bbox(t, [margin])\nbbox = margin_bbox(t, xmargin, ymargin)\n\nReturns a bounding box (bbox) for the triangulation after applying a margin. The default value of margin is 0.05. \n\n\n\n\n\n","category":"function"},{"location":"api/#Delaunator.points-Tuple{Delaunator.AbstractDelaunatorData}","page":"API","title":"Delaunator.points","text":"points(t::AbstractDelaunatorData)\n\nReturn the point coordinates that were given as input to the algorithm.  Note that changing these does not dynamically change the triangulation. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.rays-Union{Tuple{FloatType}, Tuple{Type{FloatType}, Any, Any}} where FloatType","page":"API","title":"Delaunator.rays","text":"raystart, rayend = rays(t)\n\nThis returns arrays that are indexed by the index of a point on the convex hull. So to get the infinite rays associated with the nearest point cell use:\n\nfunction rays_for_point(t)\n    rs, re = rays(t) # only need to compute this one \n    hullindex = inhull(t, i)\n    if hullindex > 0 \n        return rs[hullindex],re[hullindex]\n    else\n        return \n    end \nend \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.segments-Tuple{Delaunator.InfinitePolygon}","page":"API","title":"Delaunator.segments","text":"segments(p::InfinitePolygon; [dist = eps()])\n\nReturn an iterator over linesegments involved in the polygon. If the polygon is infinite, then this will not be closed and the first two points will be along the incoming ray and the last two points will be along the outgoing ray (each will be an arbitrary  length along this ray)\n\nIf the polygon is finite, then it will be closed.\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.triangles-Tuple{Delaunator.AbstractDelaunatorData}","page":"API","title":"Delaunator.triangles","text":"triangles(t::AbstractDelaunatorData)\n\nReturn the point indices for each triangle in the triangulation.     \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.triangles-Tuple{Delaunator.Triangulation, Integer}","page":"API","title":"Delaunator.triangles","text":"triangles(t, i)\n\nGiven a Triangulation and a point index i, return an iterator over the indices of triangles that include point i. These are returned in counter-clockwise order. \n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.triangulate-Tuple{Any}","page":"API","title":"Delaunator.triangulate","text":"triangulate([Int32,] [FloatType=Float64,] points; [tol=eps(FloatType),])\n\nComputes a triangulation of a set of points using the Delaunator algorithm. This is designed for quick graphics applications and speed rather than exact computational geometry.\n\nInputs\n\npoints is any type that has integer indexing and length supported. In addition, p = points[i] should    be a type where p[1] and p[2] are the x, y coordinates of p. Or you need to define the functions    Delaunator.getX(p), Delaunator.getY(p) for your own type p. \nIf you wish to use a a matrix to give the point information, PointsFromMatrix\ntol is used to determine when points are sufficiently close not to include\n\nReturn value\n\nA triangulation, with methods to explore edges, hull points, dual cells.\n\nSee also basictriangulation\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.truncatedcircumcenter-Union{Tuple{FloatType}, NTuple{8, FloatType}, Tuple{FloatType, FloatType, FloatType, FloatType, FloatType, FloatType, FloatType, FloatType, Any}} where FloatType","page":"API","title":"Delaunator.truncatedcircumcenter","text":"truncatedcircumcenter\n\nFor a nearly collinear triangle, then the circumcenter can be off at a point near infinity. Since the goal of this library is not computational geometry, a pragmatic choice is to truncate these wildly divergent near infinite circumcenters. \n\nfunction from d3-delaunay / Voronoi.js\n\n\n\n\n\n","category":"method"},{"location":"api/#Delaunator.update!-Tuple{Any, Delaunator.BasicTriangulation, Delaunator.TriangulationTemporaries}","page":"API","title":"Delaunator.update!","text":"bt, cdata = update!(points, bt, cdata)\n\nReuse the memory and arrays to update the triangulation. Note that the resulting return values may be new as this routine can allocate new arrays if needed to handle the updated set of points. This implements the key step of the Delaunator method. \n\n\n\n\n\n","category":"method"},{"location":"#Delaunator.jl","page":"Home","title":"Delaunator.jl","text":"","category":"section"},{"location":"#API-Overview","page":"Home","title":"API Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The API consists of a set of types for static triangulations, and getting  info about the triangulation. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"t = Triangulation(points)\ntriangles(t) # get an iterator over the triangles \ntriangles(t)\nedges(t) # get an iterator over the edges \nneighbors(t, i) # neighbors of point i\nhull(t) # get an iterator over the hull vertices\ninhull(t, i)\ndualcell(t, i) # get a description of the dual cell\ndualcell(t, centers, i) # \n\n\n# drawing methods to translate from data to polots... \nhullpoly(t)\nedgelines(t) \n\n# methods to get work with dualcell polys\np = dualcell(t, 1)\ncontains(p, pt)\nsegments(p)\nclippedpoly(p, bbox)","category":"page"},{"location":"","page":"Home","title":"Home","text":"There is also a set of types for more dynamic scenarios, where you may not want all the computed information for speed. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"bt, cdata = basictriangulation(points; [maxpoints=Integer]) # initialize data structures \nbt, cdata = update!(bt, points, cdata) # after the points have been changed, may incur allocations\nh = gethull(bt, cdata)\nindex = index_halfedges(bt, cdata)","category":"page"},{"location":"#Planned-implementations","page":"Home","title":"Planned implementations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"# cell diagram methods\ncells(t, bbox) #  get an iterator over the nearest point / voronoi cells given the bounding box\nbd = celldiagram(t [, centers]; [margin=0.05, boundingbox=mar()])\ncellarea(t, i, [bbox]) # get cell area given bbox \ncellneighbors(t, i, [bbox]) # get cell neighbors given bbox \n\n# searching methods\nnearestpoint(t, p)\nfindtriangle(t, p)","category":"page"}]
}
