var documenterSearchIndex = {"docs":
[{"location":"#KroneckerTools","page":"KroneckerTools","title":"KroneckerTools","text":"","category":"section"},{"location":"","page":"KroneckerTools","title":"KroneckerTools","text":"KroneckerTools computes chains of Kronecker products as described in Kamenik (2005).","category":"page"},{"location":"","page":"KroneckerTools","title":"KroneckerTools","text":"The following computations are performed","category":"page"},{"location":"","page":"KroneckerTools","title":"KroneckerTools","text":"c = (I<sub>p</sub> ⊗ A ⊗ I<sub>q</sub>)*b\nc = (I<sub>p</sub> ⊗ A<sup>T</sup> ⊗ I<sub>q</sub>)*b\nc = (A ⊗ A ⊗ ... ⊗ A)*b\nd = (A<sup>T</sup> ⊗ A<sup>T</sup> ⊗ ... ⊗ A<sup>T</sup> ⊗ B)*c\nC = A * (B ⊗ B ⊗ .... ⊗ B)\nD = A * B * (C ⊗ C ⊗ .... ⊗ C)\nD = A<sup>T</sup> * B * (C ⊗ C ⊗ .... ⊗ C) \nE = AB(C ⊗ D ⊗ ... ⊗ D)","category":"page"},{"location":"#Installation","page":"KroneckerTools","title":"Installation","text":"","category":"section"},{"location":"","page":"KroneckerTools","title":"KroneckerTools","text":" julia> using Pkg\n julia> Pkg.add(\"KroneckerTools\")\n ```\n \n## Algorithms\n\nWe exploit the following property of the Kronecker product:\nvec(A * B * C) = (C<sup>T</sup> ⊗ A) * vec(B), so as never to form the\nmatrix corresponding to the Kronecker product and whenever possible\nuse matrix product instead. \n\nLet A, a m * n matrix, B, a matrix whose size depends on the context, and b = vec(B). It follows that\n\n- c = (I<sub>p</sub> ⊗ A) * b = vec(A * B), where B is a  n * p matrix.\n- c = (A ⊗ I<sub>q</sub>) * b = vec(B * A<sup>T</sup>), where B is a q * m matrix\n- c = (I<sub>p</sub> ⊗ A ⊗ I<sub>q</sub>) * b is computed in p blocks\nc<sub>i</sub> = vec(B<sub>i</sub> * A<sup>T</sup>),  i = 1, ..., p where B<sub>i</sub> is the i<sup>th</sup> block of q * n elements of vector b\n\nA chain of Kronecker products, (A<sub>1</sub> ⊗ A<sub>2</sub> ⊗ ... ⊗\n    A<sub>n</sub>) * b can be written as \n    (A<sub>1</sub> ⊗ I<sub>p<sub>1</sub></sub>)*\n    (I<sub>p<sub>2</sub></sub> ⊗ A<sub>2</sub> ⊗ I<sub>p<sub>2</sub></sub>)* ... *\n        (I<sub>p<sub>n</sub></sub> ⊗ A<sub>n</sub>)b where b is a vector and p<sub>1></sub>, p<sub>2</sub>, ..., p<sub>n</sub>, q<sub>1</sub>, q<sub>2</sub>, ...,q<sub>n</sub> are such as making each group in brackets conformable.      \n\n## References\nO. Kamenik (2005), \"Solving SDGE models: A new algorithm for the Sylvester\n  equation\", <i>Computational Economics 25</i>, 167--187.\n\n## Methods\n","category":"page"},{"location":"","page":"KroneckerTools","title":"KroneckerTools","text":"@autodocs Modules = [KroneckerTools] ```","category":"page"}]
}
