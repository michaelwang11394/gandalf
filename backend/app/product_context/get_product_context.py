def get_product_content(product: str, user_input: str):
    # manual hack for now
    if product == "Retool":
        return """
When editing a query in the query library, access advanced settings via the 3-dot button next to the run button.

In the app builder, you can preview your current app via the toggle preview button in the top right. However, to actually run the app, click on the run button next to it.

The app builder also provides a debug console, which you can use to test out various JavaScript expressions in the Retool context. Access the debug console via the bottom right 'debug' button.
"""
    return None