PJ=package.json
TS=prime.ts
JS=prime.js
MJS=prime.mjs
DTS=prime.d.ts

all: $(PJ) $(JS)

$(JS): $(PJ) $(TS)
	tsc -d --target es6 $(TS)

test: all
	mocha --require esm

clean:
	-rm $(DTS) $(MJS) $(JS)

