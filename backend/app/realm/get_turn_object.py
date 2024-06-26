from app.realm.construct_screen import TextObject
from app.realm.parse_screen import parse_screen


def get_turn_objects_from_screen():
    turn_objects = []

    screen_elements = parse_screen()

    for element in screen_elements:

        turn_object = TextObject(
            text=element.text,
            center_top=element.bounding_box.center_y,
            center_left=element.bounding_box.center_x,
            is_turn_object=True if element.is_interactive else False,
        )
        turn_objects.append(turn_object)

    return turn_objects


# Usage
turn_objects = get_turn_objects_from_screen()
