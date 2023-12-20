from urllib.parse import unquote
import json
import re
import os


def main():
    for name in os.listdir():
        if not re.match(r'.*\.encode', name):
            continue
        print(name)
        with open(name, 'r') as f:
            str_encoded = f.read()
        str_json = unquote(str_encoded)
        obj = json.loads(str_json)
        for a in ('star', 'pos', 'attr', 'story', 'camp', 'skills', 'captains',
                  'combos', 'engrav', 'breaks', 'ring', 'subli', 'voice', 'mate'
                  ):
            obj.pop(a, 0)
        str_u = json.dumps(obj, indent=2)
        def trans(m):
            hex4 = m.group(1)
            return chr(int(hex4, base=16))
        str_out = re.sub(r'\\u([0-9a-f]{4})', trans, str_u)
        name_ = os.path.splitext(name)[0] + '.json'
        with open(name_, 'w', newline='\n') as f:
            f.write(str_out)


if __name__ == '__main__':
    main()
