from dataclasses import dataclass
from typing import List, Set, Tuple

@dataclass
class TextObject:
    text: str
    center_top: float
    center_left: float
    is_turn_object: bool = False
    turn_index: int = None

def construct_onscreen_parse(turn_objects: List[TextObject], margin: float = 10.0) -> str:
    # Step 0 & 1: Get all text boxes and surrounding objects
    all_objects: Set[TextObject] = set()
    for i, turn_object in enumerate(turn_objects):
        all_objects.add(turn_object)
        all_objects.update(get_surrounding_objects(turn_object))  # This function is not defined here
        turn_object.is_turn_object = True
        turn_object.turn_index = i + 1

    # Step 3: Sort objects by center (Top → Bottom, Left → Right)
    sorted_objects = sorted(all_objects, key=lambda obj: (obj.center_top, obj.center_left))

    # Step 4: Determine vertical levels
    levels: List[List[TextObject]] = []
    for obj in sorted_objects:
        same_level = [obj]
        for other in sorted_objects:
            if obj != other and abs(obj.center_top - other.center_top) <= margin:
                same_level.append(other)
        if not any(set(same_level).issubset(set(level)) for level in levels):
            levels.append(same_level)

    # Step 5: Construct onscreen parse
    onscreen_parse = ""
    for level in levels:
        level_parse = ""
        for obj in sorted(level, key=lambda x: x.center_left):
            if obj.is_turn_object:
                level_parse += f"\t{{{{turn_index}. {obj.text}}}}"
            else:
                level_parse += f"\t{obj.text}"
        onscreen_parse += level_parse.strip() + "\n"

    return onscreen_parse.strip()

# Example usage
turn_objects = [
    TextObject("(206) 198 1999", 100, 10, True),
    TextObject("(206) 198 1699", 100, 50, True),
    TextObject("Your New home!", 10, 30),
    TextObject("Steven Realtors Inc.", 20, 30),
    TextObject("Trusted by over 5 million", 30, 30),
    TextObject("Proud homeowners", 40, 30),
    TextObject("Contact Us", 50, 30),
    TextObject("Monday - Friday", 60, 10),
    TextObject("Saturday - Sunday", 60, 50),
]

print(construct_onscreen_parse(turn_objects))