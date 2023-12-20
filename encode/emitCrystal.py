from urllib.parse import unquote
import json
import re
import os


crystal_black_names = (
    '堕天', '统治', '永夜', '抵御', '深渊',
    '宿命', '灼烧',
    '宝藏', '凛霜', '裁决', '法则', '魔法', '永恒',
    '雷霆', '堡垒', '反抗', '秘密', '领域'
)
crystal_white_names = (
    '天使', '王权', '安息', '守护', '魔鬼',
    '命运', '热诚',
    '圣杯', '冰霜', '审判', '正义', '圣言', '力量',
    '闪电', '要塞', '战争', '智慧', '世界'
)


def main():
    crystals_black = (set(), set(), set())
    crystals_white = (set(), set(), set())

    for name in os.listdir():
        if not re.match(r'.*\.encode', name):
            continue
        print(name)
        with open(name, 'r') as f:
            str_encoded = f.read()
        str_json = unquote(str_encoded)
        obj = json.loads(str_json)

        for a in obj['crystal']['black']:
            b = a['crystals']
            top0 = b['top'][0][0] - 5001
            top1 = b['top'][1][0] - 5001
            mid = b['mid'][0][0] - 5001
            bot0 = b['bot'][0][0] - 5001
            bot1 = b['bot'][1][0] - 5001
            if a['level'] == 1:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 5 <= mid <= 6
                        and 0 <= bot0 <= 4 and 0 <= bot1 <= 4
                        ):
                    print('black_1_error')
                    continue
                crystals_black[0].add((
                    tuple(sorted((top0, top1))),
                    tuple([mid]),
                    tuple(sorted((bot0, bot1)))
                ))
            elif a['level'] == 2:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 5 <= mid <= 6
                        and 13 <= bot0 <= 17 and 13 <= bot1 <= 17
                        ):
                    print('black_2_error')
                    continue
                crystals_black[1].add((
                    tuple(sorted((bot0, bot1))),
                    tuple(sorted((top0, top1))),
                    tuple([mid])
                ))
            elif a['level'] == 3:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 13 <= mid <= 17
                        and 13 <= bot0 <= 17 and 13 <= bot1 <= 17
                        ):
                    print('black_3_error')
                    continue
                crystals_black[2].add((
                    tuple(sorted((mid, bot0, bot1))),
                    tuple(sorted((top0, top1)))
                ))
            else:
                raise Exception("符文等级异常")

        for a in obj['crystal']['white']:
            b = a['crystals']
            top0 = b['top'][0][0] - 5019
            top1 = b['top'][1][0] - 5019
            mid = b['mid'][0][0] - 5019
            bot0 = b['bot'][0][0] - 5019
            bot1 = b['bot'][1][0] - 5019
            if a['level'] == 1:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 5 <= mid <= 6
                        and 0 <= bot0 <= 4 and 0 <= bot1 <= 4
                        ):
                    print('white_1_error')
                    continue
                crystals_white[0].add((
                    tuple(sorted((top0, top1))),
                    tuple([mid]),
                    tuple(sorted((bot0, bot1)))
                ))
            elif a['level'] == 2:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 5 <= mid <= 6
                        and 13 <= bot0 <= 17 and 13 <= bot1 <= 17
                        ):
                    print('white_2_error')
                    continue
                crystals_white[1].add((
                    tuple(sorted((bot0, bot1))),
                    tuple(sorted((top0, top1))),
                    tuple([mid])
                ))
            elif a['level'] == 3:
                if not (7 <= top0 <= 12 and 7 <= top1 <= 12
                        and 13 <= mid <= 17
                        and 13 <= bot0 <= 17 and 13 <= bot1 <= 17
                        ):
                    print('white_3_error')
                    continue
                crystals_white[2].add((
                    tuple(sorted((mid, bot0, bot1))),
                    tuple(sorted((top0, top1)))
                ))
            else:
                raise Exception("符文等级异常")

    for i in range(3):
        with open(f'crystals_black_{i + 1}.txt', 'w', newline='\n') as f:
            last_type = tuple()
            for crystal in sorted(crystals_black[i]):
                if crystal[0] != last_type:
                    last_type = crystal[0]
                    f.write('\n')
                f.write(' | '.join(
                    map(lambda t: ' '.join(
                        map(lambda id: crystal_black_names[id], t)
                    ), crystal)
                ) + '\n')

        with open(f'crystals_white_{i + 1}.txt', 'w', newline='\n') as f:
            last_type = tuple()
            for crystal in sorted(crystals_white[i]):
                if crystal[0] != last_type:
                    last_type = crystal[0]
                    f.write('\n')
                f.write(' | '.join(
                    map(lambda t: ' '.join(
                        map(lambda id: crystal_white_names[id], t)
                    ), crystal)
                ) + '\n')


if __name__ == '__main__':
    main()
